import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.3:0',
  releaseNotes: {
    en_US:
      'Updates Node.js to 24 with the October 2026 security fixes, refreshes the CA trust store, and restarts the miner proxy automatically if it crashes. Also corrects the power-target hint: it now says hashboards, not blisspoints.',
    es_ES:
      'Actualiza Node.js a 24 con las correcciones de seguridad de octubre de 2026, renueva el almacén de confianza de CA y reinicia automáticamente el proxy de mineros si falla. También corrige la ayuda del objetivo de potencia: habla de hashboards, no de blisspoints.',
    de_DE:
      'Aktualisiert Node.js auf 24 mit den Sicherheitsfixes von Oktober 2026, erneuert den CA-Vertrauensspeicher und startet den Miner-Proxy bei Absturz automatisch neu. Korrigiert auch den Hinweis zur Leistungsvorgabe: Hashboards statt Blisspoints.',
    pl_PL:
      'Aktualizuje Node.js do 24 z poprawkami zabezpieczeń z października 2026, odświeża magazyn zaufania CA i automatycznie restartuje proxy koparek po awarii. Poprawia też podpowiedź celu mocy: hashboards, nie blisspoints.',
    fr_FR:
      'Met à jour Node.js vers 24 avec les correctifs de sécurité d’octobre 2026, renouvelle le magasin d’autorités de confiance et redémarre automatiquement le proxy de mineurs en cas de plantage. Corrige aussi l’aide sur la consigne de puissance : hashboards, pas blisspoints.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
