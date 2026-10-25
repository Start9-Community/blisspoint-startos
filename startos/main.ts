import { i18n } from './i18n'
import { sdk } from './sdk'
import { proxyPort, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Blisspoint'))

  return sdk.Daemons.of(effects)
    .addDaemon('proxy', {
      subcontainer: sdk.SubContainer.of(
        effects,
        { imageId: 'blisspoint' },
        null,
        'proxy-sub',
      ),
      exec: { command: ['proxy-rs'] },
      ready: {
        display: null,
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, proxyPort, {
            successMessage: i18n('The miner proxy is ready'),
            errorMessage: i18n('The miner proxy is not ready'),
          }),
      },
      requires: [],
    })
    .addDaemon('primary', {
      subcontainer: sdk.SubContainer.of(
        effects,
        { imageId: 'blisspoint' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'main',
          subpath: null,
          mountpoint: '/data',
          readonly: false,
        }),
        'blisspoint-sub',
      ),
      exec: {
        command: ['node', 'server/serve.cjs'],
        cwd: '/app',
        // The image's serve.cjs spawns and supervises proxy-rs itself when run
        // as a plain Docker container (umbrel, raw image). StartOS runs
        // proxy-rs as its own daemon above, so disable that here to avoid two
        // proxies racing for :8081.
        env: { PROXY_SPAWN: '0' },
      },
      ready: {
        display: i18n('Web Interface'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: i18n('The web interface is ready'),
            errorMessage: i18n('The web interface is not ready'),
          }),
      },
      requires: ['proxy'],
    })
})
