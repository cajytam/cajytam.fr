# cajytam.fr

Portfolio et blog personnel sous Astro 6

## Commandes

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Check stylelint & Prettier                       |
| `npm run lint:fix`        | Corrige stylelint & Prettier                     |

## CMS (Sveltia)

Le projet utilise un CMS Git-based compatible Astro 6 : Sveltia CMS

- Interface admin: `/admin/`
- Fichier HTML admin: `public/admin/index.html`
- Configuration CMS: `public/admin/config.yml`
- Contenus gérés: `src/content/blog` et `src/content/projects`

### Backend GitHub

Pour les tests locaux => `local_backend: true` est active dans la config CMS.
