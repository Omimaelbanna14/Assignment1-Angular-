
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Assignment1-Angular-/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Assignment1-Angular-/home",
    "route": "/Assignment1-Angular-"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular-/home"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular-/about"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular-/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular-/contact"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular-/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5432, hash: 'c1ca1d05316ddd1a72e6e08e9039e5069d8a1b371e195d55356d43745e53c46a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: 'c2f59e64efd00c6709c70c55978c7eb8d1102c7b1a1816503c13d16704b69c74', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20521, hash: '7a851b3b8a22d8e91897330c5dc8712d86689367a34a571e950221d5e7290a96', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19489, hash: '7fa632c47620f1a3cc72e0d883908ca24816781a4779ffbd20b3f1c1ba2a655c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 26301, hash: 'be54ee2d4ac8ad56c7106d154fac90437bbe1cd848236df2fd28504547800ec6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24271, hash: 'ed5439791e58e0f63fcab15c7068dd2b8203e544a91cf55a0a8f9b47c95204f5', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-GUOLUCV3.css': {size: 304932, hash: 'gD3uVOp9irA', text: () => import('./assets-chunks/styles-GUOLUCV3_css.mjs').then(m => m.default)}
  },
};
