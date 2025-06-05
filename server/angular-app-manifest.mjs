
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
    'index.csr.html': {size: 19814, hash: '20c824ff5f47702a261b01891869a56affe2196924f34dc61ab424743b08ab89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1141, hash: '2fcf17ba4d56348051bce6b40de0ed8fc7ae61b066afef59e6cdf6ecca681811', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34334, hash: '11ec709639a46974d80ab8a516eb272b43f135b121c77cfb3273716aa5885a3f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OWQU75A3.css': {size: 65033, hash: 'Z+EUFCu7xYY', text: () => import('./assets-chunks/styles-OWQU75A3_css.mjs').then(m => m.default)}
  },
};
