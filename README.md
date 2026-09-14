# Treecetrain

Suivi personnel du programme **Road to Pavot**. Pas de compte, pas de serveur : tout est stocké dans le navigateur de l'appareil utilisé.

## Fonctionnement

**Semaine.** Les 7 jours, avec le tonnage ou le nombre d'exercices. Tu tapes reps et charges directement dans la séance, c'est sauvegardé à la frappe. Les boutons − et + ajustent la charge par pas de 2,5 kg sans ouvrir le clavier. La ligne "Objectif" sous chaque exercice rappelle ce que le programme prévoyait en début de semaine.

**Cocher les séries.** Une case par série. Cocher démarre le chrono de repos (2 min par défaut, réglable dans Suivi, ±30 s en direct, bip et vibration à la fin). L'en-tête de séance affiche l'avancement en séries, et le bouton de validation passe en avant quand tout est coché. Les coches se remettent à zéro à la clôture de la semaine.

**Valider une séance.** Fige ce que tu as fait dans l'historique. Si tu as tenu ou battu l'objectif sur un exercice, l'app propose +2,5 kg. Accepter met la hausse en file d'attente : rien ne bouge tout de suite, elle s'applique aux objectifs de la semaine suivante à la clôture. Tu peux la retirer de la file tant que la semaine n'est pas close.

**Valider la semaine.** Archive les 7 jours, applique les hausses en attente, incrémente le compteur et repart sur les charges à jour. Les séances non validées restent marquées comme telles.

**Suivi.** Deux graphiques : tonnage (total de la semaine ou séance par séance) et charge max par exercice. Plus l'historique semaine par semaine, dépliable.

Les runs se valident simplement, sans chiffres, avec un champ notes libre.

## Déployer sur GitHub Pages

1. Crée un repo (ex. `treecetrain`) sur github.com/tbrun0-1, dépose tout le contenu de ce dossier à la racine.
2. Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
3. L'app sera en ligne sur `https://tbrun0-1.github.io/treecetrain/` après une minute ou deux.

## Ajouter sur l'iPhone

1. Ouvre l'URL dans Safari (pas Chrome, l'ajout à l'écran d'accueil iOS ne marche qu'avec Safari).
2. Bouton Partager → **Sur l'écran d'accueil**.
3. L'icône Treecetrain apparaît comme une app native, plein écran, sans barre Safari.

## Important

Les données (charges, séances, historique) restent locales à l'appareil. Ce que tu modifies sur iPhone ne se synchronise pas avec un ordinateur. Dans l'onglet Suivi : **Exporter** produit un JSON de sauvegarde, **Importer** le recharge (changement d'appareil, navigateur vidé). **Réinitialiser le programme** garde l'historique, **Effacer l'historique** garde le programme.

Un point à connaître : le tonnage se calcule en reps × charge. Les tractions à poids de corps comptent donc pour zéro tant que tu laisses 0 kg. Si tu passes en lesté, mets le poids ajouté.

## Tester en local

Ouvrir `index.html` directement dans un navigateur suffit pour l'essentiel. Le service worker (mode hors-ligne) exige en revanche un vrai serveur :

```
python3 -m http.server 8000
```

puis `http://localhost:8000`.

## Fichiers

```
index.html      → app complète (HTML/CSS/JS, aucune dépendance)
manifest.json   → métadonnées PWA (nom, icônes, thème)
sw.js           → cache hors-ligne
icons/          → logo (icon.svg = source éditable)
```
