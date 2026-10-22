import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.2:1',
  releaseNotes: {
    en_US:
      'Rebuilds the 0.6.2 package with StartOS SDK 3.1.0. No functional changes.',
    es_ES:
      'Reconstruye el paquete 0.6.2 con StartOS SDK 3.1.0. Sin cambios funcionales.',
    de_DE:
      'Baut das 0.6.2-Paket mit StartOS SDK 3.1.0 neu. Keine funktionalen Änderungen.',
    pl_PL:
      'Przebudowuje pakiet 0.6.2 z StartOS SDK 3.1.0. Bez zmian funkcjonalnych.',
    fr_FR:
      'Reconstruit le paquet 0.6.2 avec StartOS SDK 3.1.0. Aucun changement fonctionnel.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
