import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'blisspoint',
  title: 'Blisspoint',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/blisspoint-startos',
  upstreamRepo: 'https://github.com/heatpunk/blisspoint',
  marketingUrl: 'https://github.com/heatpunk/blisspoint',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    blisspoint: {
      source: {
        dockerTag:
          'ghcr.io/heatpunk/blisspoint:0.6.1@sha256:4cdaf0dc11b29b7f8b07f308b5ee70e6d6c6db59196e5c2b4a6e3cec01be35e7',
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
