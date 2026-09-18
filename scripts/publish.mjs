#!/usr/bin/env node
/**
 * Construit le site pour une cible donnée et publie le dist sur la branche
 * correspondante.
 *
 *   node scripts/publish.mjs pprod
 *   node scripts/publish.mjs prod --no-push
 *
 * Le choix de l'environnement (environment.pprod.ts, environment.prod.ts…)
 * est porté par angular.json (fileReplacements) : plus aucun import à
 * modifier à la main dans config-service.ts.
 */
import { execFileSync } from 'node:child_process';
import { argv, exit } from 'node:process';

const CIBLES = {
  pprod: { branche: 'pprod', configuration: 'production', url: 'https://preprodmtfp.gouv.bj/pprod-siteweb/' },
  prod: { branche: 'prod', configuration: 'prod', url: 'https://travail.gouv.bj/' },
  dev: { branche: 'dev', configuration: 'dev-server', url: 'https://travail-api.mtfp-ctd.bj/' },
};

const DIST = 'dist';

const args = argv.slice(2);
const cible = args.find(a => !a.startsWith('-'));
const option = nom => args.includes(nom);

const git = (...params) => execFileSync('git', params, { encoding: 'utf8' }).trim();
const gitLive = (...params) => execFileSync('git', params, { stdio: 'inherit' });
const info = message => console.log(`\n\x1b[36m▸ ${message}\x1b[0m`);
const alerte = message => console.log(`\x1b[33m! ${message}\x1b[0m`);

function echec(message) {
  console.error(`\n\x1b[31m✖ ${message}\x1b[0m\n`);
  exit(1);
}

if (!cible || !CIBLES[cible]) {
  echec(`Cible manquante ou inconnue.\n  Utilisation : node scripts/publish.mjs <${Object.keys(CIBLES).join('|')}> [--no-push] [--no-build]`);
}

const { branche, configuration, url } = CIBLES[cible];

// 1. Le dépôt ne doit rien contenir d'autre que le dist en cours de modification :
//    le script change de branche, ce qui emporterait un travail non validé.
const enAttente = git('status', '--porcelain')
  .split('\n')
  .filter(Boolean)
  .filter(ligne => !ligne.slice(3).startsWith(`${DIST}/`));

if (enAttente.length) {
  echec(
    `Des modifications ne sont pas validées :\n${enAttente.slice(0, 15).map(l => `    ${l}`).join('\n')}` +
    `${enAttente.length > 15 ? `\n    … et ${enAttente.length - 15} autres` : ''}` +
    `\n\n  Validez ou mettez de côté (git stash) avant de publier.`
  );
}

const brancheDepart = git('rev-parse', '--abbrev-ref', 'HEAD');

console.log(`\nPublication « ${cible} » → branche ${branche} (configuration ${configuration})`);
console.log(`Site cible : ${url}`);

try {
  // 2. Se placer sur la branche de la cible
  if (brancheDepart !== branche) {
    info(`Passage sur la branche ${branche}`);
    gitLive('checkout', branche);
  }

  try {
    gitLive('pull', '--ff-only', 'origin', branche);
  } catch {
    alerte(`Impossible de récupérer origin/${branche} : publication sur l'état local.`);
  }

  // 3. Construire
  if (!option('--no-build')) {
    info(`Construction (ng build --configuration ${configuration})`);
    execFileSync('npx', ['ng', 'build', '--configuration', configuration], { stdio: 'inherit' });
  }

  // 4. Valider le dist
  info('Enregistrement du dist');
  gitLive('add', '-A', DIST);

  const indexe = git('diff', '--cached', '--name-only');

  if (!indexe) {
    alerte('Le dist est identique à celui de la branche : rien à publier.');
  } else {
    const nombre = indexe.split('\n').length;
    const horodatage = new Date().toISOString().slice(0, 16).replace('T', ' ');
    gitLive('commit', '-m', `build(${cible}): régénère le dist — ${horodatage}`);
    console.log(`  ${nombre} fichier(s) publié(s).`);

    // 5. Pousser
    if (option('--no-push')) {
      alerte('--no-push : le commit reste local.');
    } else {
      info(`Envoi vers origin/${branche}`);
      try {
        gitLive('push', 'origin', branche);
      } catch {
        echec(
          `Le push a échoué.\n  Vérifiez l'accès à GitHub (clé SSH ou jeton), puis relancez :\n    git push origin ${branche}`
        );
      }
    }
  }
} finally {
  // 6. Revenir à la branche de départ
  const brancheActuelle = git('rev-parse', '--abbrev-ref', 'HEAD');
  if (brancheActuelle !== brancheDepart) {
    info(`Retour sur la branche ${brancheDepart}`);
    gitLive('checkout', brancheDepart);
  }
}

console.log('\n\x1b[32m✔ Terminé.\x1b[0m\n');
