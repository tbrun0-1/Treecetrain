# Treecetrain

Suivi personnel du programme **Road to Pavot**. Pas de compte, pas de serveur : tout est stocké dans le navigateur de l'appareil utilisé.

## Déployer sur GitHub Pages

1. Crée un repo (ex. `treecetrain`) sur github.com/tbrun0-1, dépose tout le contenu de ce dossier à la racine.
2. Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
3. L'app sera en ligne sur `https://tbrun0-1.github.io/treecetrain/` après une minute ou deux.

## Ajouter sur l'iPhone

1. Ouvre l'URL dans Safari (pas Chrome, l'ajout à l'écran d'accueil iOS ne marche qu'avec Safari).
2. Bouton Partager → **Sur l'écran d'accueil**.
3. L'icône Treecetrain apparaît comme une app native, plein écran, sans barre Safari.

## Important

Les données (charges, séances, modifications) restent locales à l'appareil. Ce que tu modifies sur iPhone ne se synchronise pas avec un ordinateur. Utilise **Exporter** dans l'app pour sauvegarder un fichier JSON de secours, et **Importer** pour le recharger si besoin (changement d'appareil, navigateur vidé, etc.).

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
