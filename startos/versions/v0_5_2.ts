import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v0_5_2 = VersionInfo.of({
  version: '0.5.2:0',
  releaseNotes: {
    en_US:
      "The pause/play button and status dot now reflect the miner's real state instead of guessing from hashrate — no more false PAUSED while a miner is hashing.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
