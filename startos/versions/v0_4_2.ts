import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v0_4_2 = VersionInfo.of({
  version: '0.4.2:0',
  releaseNotes: {
    en_US:
      'Visual update: the power slider is reborn as a glass capsule, and the app ships a complete new icon set — home-screen/app icon, browser favicon, and status icons — all drawn in the new style.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
