import { ConfigService } from './config-service';

/**
 * Remplace toute image qui échoue au chargement (fichier absent côté API,
 * chemin invalide…) par l'image de remplacement, au lieu d'afficher le texte
 * alternatif sur fond vide.
 *
 * L'écoute se fait en phase de capture : l'évènement « error » d'une image
 * ne remonte pas dans l'arbre.
 */
export function installBrokenImageHandler(): () => void {
  const onError = (event: Event) => {
    const target = event.target as HTMLImageElement | null;

    if (!target || target.tagName !== 'IMG') { return; }
    if (target.dataset['fallbackApplied'] === '1') { return; }
    if (target.getAttribute('src') === ConfigService.placeholder) { return; }

    target.dataset['fallbackApplied'] = '1';
    target.src = ConfigService.placeholder;
  };

  document.addEventListener('error', onError, true);

  return () => document.removeEventListener('error', onError, true);
}
