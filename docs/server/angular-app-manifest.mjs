
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Assignment1-Angular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Assignment1-Angular/home",
    "route": "/Assignment1-Angular"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular/home"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular/about"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular/contact"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5430, hash: '64713a9811aa7e94f2f901913a2e0e77a7f0e6dc8c7738831d3bbe9b9a178c19', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: 'a728ce9639cb9bc7f3cef48cd93d26c0883783fbb73d1e5e052165a020ac14e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19484, hash: '5f8a5e1d91fe992a5e9874ebbaa8a09238fd983a72c7286c09c4ea07fb2b216a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 26296, hash: 'f1179517f7f3dcc348061116405845634bd989e3e251e5326c1b8c69171fb77d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24266, hash: '7cdfc1b3d24938cb8e8aa158b298c6a173e4438af4ccae8c5d7790977cc0195e', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20516, hash: '2e553e306454446ec49b05bba6a4e03dad9adceef0c1cc04e0775983bf2e4ad6', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-GUOLUCV3.css': {size: 304932, hash: 'gD3uVOp9irA', text: () => import('./assets-chunks/styles-GUOLUCV3_css.mjs').then(m => m.default)}
  },
};
