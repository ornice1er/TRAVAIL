# Builds et déploiement — site MTFP

## Environnements

L'environnement n'est plus choisi en modifiant un import à la main : c'est
Angular qui substitue le bon fichier au moment du build (`fileReplacements`
dans `angular.json`). `config-service.ts` importe toujours
`environments/environment` et ne doit plus être touché.

| Commande | Configuration | Fichier d'environnement | `base href` | API visée |
|---|---|---|---|---|
| `npm start` | `development` | `environment.ts` | `/` | `http://localhost:8000` |
| `npm run build:dev` | `dev-server` | `environment.dev.ts` | `/` | `travail-api.mtfp-ctd.bj` |
| `npm run build:pprod` | `production` | `environment.pprod.ts` | `/pprod-siteweb/` | `preprodmtfp.gouv.bj/pprod-sitewebapi` |
| `npm run build:prod` | `prod` | `environment.prod.ts` | `/` | `travail.gouv.bj/backend` |

> La configuration s'appelle `production` pour la préproduction, par
> compatibilité avec les scripts de déploiement existants. `npm run build:pprod`
> est son nom explicite.

Le build sort dans `dist/travail/browser`.

## Publier sur la branche correspondante

```bash
npm run publish:pprod    # build préprod puis dist publié sur la branche pprod
npm run publish:prod     # build prod    puis dist publié sur la branche prod
npm run publish:dev      # build dev     puis dist publié sur la branche dev
```

Le script (`scripts/publish.mjs`) enchaîne :

1. il refuse de démarrer s'il reste des modifications non validées hors `dist/`,
   puisqu'il change de branche ;
2. il bascule sur la branche cible et récupère `origin` (sans écraser le local) ;
3. il construit avec la configuration de la cible ;
4. il valide `dist/` avec un message daté, et ne commite rien si le résultat est
   identique ;
5. il pousse sur la branche, puis revient sur votre branche de départ.

Options : `--no-push` (garde le commit en local), `--no-build` (publie le `dist/`
déjà présent).

## Côté API (TRAVAIL-API)

Après un déploiement, sur le serveur :

```bash
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan route:clear && php artisan route:cache
php artisan config:clear && php artisan config:cache
```

Variables à renseigner dans le `.env` du serveur :

- `APP_FRONT_URL` — adresse publique du site, utilisée par `sitemap.xml` ;
- `REFORMES_API_URL` — plateforme eReformes, pour la page « Suivi des réformes ».
