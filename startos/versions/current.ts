import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.4:0',
  releaseNotes: {
    en_US:
      'Power targets now show exact watts on small machines like Bitaxe (under 500 W), so a 120 W heater reads 120 W instead of 100 W. Big ASICs keep the familiar 50 W steps. Full release notes: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.4',
    es_ES:
      'Los objetivos de potencia ahora muestran vatios exactos en máquinas pequeñas como Bitaxe (menos de 500 W): un calentador de 120 W muestra 120 W en lugar de 100 W. Los ASIC grandes mantienen los pasos de 50 W. Notas completas: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.4',
    de_DE:
      'Leistungsziele zeigen jetzt exakte Watt bei kleinen Geräten wie Bitaxe (unter 500 W): Ein 120-W-Heizer zeigt 120 W statt 100 W. Große ASICs behalten die vertrauten 50-W-Schritte. Vollständige Versionshinweise: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.4',
    pl_PL:
      'Cele mocy pokazują teraz dokładne waty na małych urządzeniach, takich jak Bitaxe (poniżej 500 W): grzejnik 120 W pokazuje 120 W zamiast 100 W. Duże ASIC-i zachowują znane kroki co 50 W. Pełne informacje o wydaniu: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.4',
    fr_FR:
      'Les consignes de puissance affichent désormais des watts exacts sur les petites machines comme Bitaxe (moins de 500 W) : un radiateur de 120 W affiche 120 W au lieu de 100 W. Les gros ASIC conservent les pas de 50 W. Notes complètes : https://github.com/heatpunk/blisspoint/releases/tag/v0.6.4',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
