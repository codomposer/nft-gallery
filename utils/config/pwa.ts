export const manifestIcons = [
  {
    src: '/icons/64x64.62fa86b5.png',
    type: 'image/png',
    sizes: '64x64',
    purpose: 'any',
  },
  {
    src: '/icons/64x64.maskable.62fa86b5.png',
    type: 'image/png',
    sizes: '64x64',
    purpose: 'maskable',
  },
  {
    src: '/icons/120x120.62fa86b5.png',
    type: 'image/png',
    sizes: '120x120',
    purpose: 'any',
  },
  {
    src: '/icons/120x120.maskable.62fa86b5.png',
    type: 'image/png',
    sizes: '120x120',
    purpose: 'maskable',
  },
  {
    src: '/icons/144x144.62fa86b5.png',
    type: 'image/png',
    sizes: '144x144',
    purpose: 'any',
  },
  {
    src: '/icons/144x144.maskable.62fa86b5.png',
    type: 'image/png',
    sizes: '144x144',
    purpose: 'maskable',
  },
  {
    src: '/icons/152x152.62fa86b5.png',
    type: 'image/png',
    sizes: '152x152',
    purpose: 'any',
  },
  {
    src: '/icons/152x152.maskable.62fa86b5.png',
    type: 'image/png',
    sizes: '152x152',
    purpose: 'maskable',
  },
  {
    src: '/icons/192x192.62fa86b5.png',
    type: 'image/png',
    sizes: '192x192',
    purpose: 'any',
  },
  {
    src: '/icons/192x192.maskable.62fa86b5.png',
    type: 'image/png',
    sizes: '192x192',
    purpose: 'maskable',
  },
  {
    src: '/icons/384x384.62fa86b5.png',
    type: 'image/png',
    sizes: '384x384',
    purpose: 'any',
  },
  {
    src: '/icons/384x384.maskable.62fa86b5.png',
    type: 'image/png',
    sizes: '384x384',
    purpose: 'maskable',
  },
  {
    src: '/icons/512x512.62fa86b5.png',
    type: 'image/png',
    sizes: '512x512',
    purpose: 'any',
  },
  {
    src: '/icons/512x512.maskable.62fa86b5.png',
    type: 'image/png',
    sizes: '512x512',
    purpose: 'maskable',
  },
]

import type { ModuleOptions } from '@vite-pwa/nuxt'

const scope = '/'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  scope,
  base: scope,
  manifest: {
    id: scope,
    scope,
    name: 'KodaDot - Polkadot NFT explorer',
    short_name: 'KodaDot',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    start_url: '/',
    icons: manifestIcons,
  },
  // workbox: {
  //   globPatterns: ['**/*.{js,css,html,txt,png,ico,svg,webp,avif}'],
  //   navigateFallback: '/',
  //   cleanupOutdatedCaches: true,
  //   runtimeCaching: [
  //     {
  //       urlPattern: '.*\\.(?:png|jpg|jpeg|svg|gif|webp|avif)$',
  //       handler: 'CacheFirst',
  //       options: {
  //         cacheName: 'images',
  //         expiration: {
  //           maxEntries: 100,
  //           maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
  //         },
  //       },
  //     },
  //   ],
  // },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === 'true',
    navigateFallback: scope,
  },
}
