import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.3:0',
  releaseNotes: {
    en_US:
      'Updates Node.js to 24 with the October 2026 security fixes and refreshes the CA trust store. Also corrects the power-target hint: it now says hashboards, not blisspoints. Proxy supervision remains managed by StartOS. Full release notes: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.3',
    es_ES:
      'Actualiza Node.js a 24 con las correcciones de seguridad de octubre de 2026 y renueva el almacén de confianza de CA. También corrige la ayuda del objetivo de potencia: habla de hashboards, no de blisspoints. StartOS sigue gestionando la supervisión del proxy. Notas completas: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.3',
    de_DE:
      'Aktualisiert Node.js auf 24 mit den Sicherheitsfixes von Oktober 2026 und erneuert den CA-Vertrauensspeicher. Korrigiert auch den Hinweis zur Leistungsvorgabe: Hashboards statt Blisspoints. Die Proxy-Überwachung übernimmt weiterhin StartOS. Vollständige Versionshinweise: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.3',
    pl_PL:
      'Aktualizuje Node.js do 24 z poprawkami zabezpieczeń z października 2026 i odświeża magazyn zaufania CA. Poprawia też podpowiedź celu mocy: hashboards, nie blisspoints. Nadzorem nad proxy nadal zarządza StartOS. Pełne informacje o wydaniu: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.3',
    fr_FR:
      'Met à jour Node.js vers 24 avec les correctifs de sécurité d’octobre 2026 et renouvelle le magasin d’autorités de confiance. Corrige aussi l’aide sur la consigne de puissance : hashboards, pas blisspoints. La supervision du proxy reste gérée par StartOS. Notes de version complètes : https://github.com/heatpunk/blisspoint/releases/tag/v0.6.3',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
