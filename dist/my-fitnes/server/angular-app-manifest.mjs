
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MyFitnes/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MyFitnes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19814, hash: 'd5e16f5ff88e9cc3f4b4664f2862843b06e29c2522620a22db316bdfed43bfe5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1141, hash: 'e3d63abdc19054a020f9345eb4f3ab9a3656471b333da339dd2c7dce689e018a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34334, hash: 'd1566f15b6bb8cdc29cf911a34376d198f16477d5dd35b4997defa304e3a47f5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OWQU75A3.css': {size: 65033, hash: 'Z+EUFCu7xYY', text: () => import('./assets-chunks/styles-OWQU75A3_css.mjs').then(m => m.default)}
  },
};
