import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.1:0',
  releaseNotes: {
    en_US:
      'Updates Blisspoint to 0.6.1. The browser tab is titled Blisspoint again.',
    es_ES:
      'Actualiza Blisspoint a la versión 0.6.1. La pestaña del navegador vuelve a llamarse Blisspoint.',
    de_DE:
      'Aktualisiert Blisspoint auf 0.6.1. Der Browser-Tab heißt wieder Blisspoint.',
    pl_PL:
      'Aktualizuje Blisspoint do wersji 0.6.1. Karta przeglądarki znów nosi nazwę Blisspoint.',
    fr_FR:
      "Met à jour Blisspoint vers la version 0.6.1. L'onglet du navigateur s'intitule de nouveau Blisspoint.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
