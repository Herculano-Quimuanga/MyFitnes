
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
    'index.csr.html': {size: 19814, hash: '04062a80d9121f97a51f6a15e19271d71f1775b0adcf6922ed3b4e2e2a24bf2c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1141, hash: '4ad23f1bb67e73f52aab4a7d974841f1e39a8c51a77f52fd9fc217ea38769c92', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37005, hash: '330d47294b150d8907a6bd5e130224b3b01101e9d09a5dbcd442bd464e2b2ab8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OFZ2AH74.css': {size: 65101, hash: 'VgZ2tU8nBZc', text: () => import('./assets-chunks/styles-OFZ2AH74_css.mjs').then(m => m.default)}
  },
};
