import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v0_4_7 = VersionInfo.of({
  version: '0.4.7:0',
  releaseNotes: {
    en_US:
      'Glass redesign: the play/pause and settings buttons are now clear glass that lets the background show through, with the icons frosted into glass.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
