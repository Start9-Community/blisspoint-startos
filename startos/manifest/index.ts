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
          'ghcr.io/heatpunk/blisspoint:0.6.4@sha256:b4d2dc52ba0327097c124f98ad6dd642451f217c8aac270becbdbe2a478090a1',
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
