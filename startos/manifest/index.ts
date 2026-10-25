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
          'ghcr.io/heatpunk/blisspoint:0.6.3@sha256:177fe6e130b60031d71ac3426c9dfce4a98f9f6f0040767f214f986588f3a135',
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
