import { defineConfig } from 'astro/config';

// IMPORTANT — edit these two values before deploying:
//
// site:  the full URL the site will live at.
// base:  the path under that URL.
//
// Two common cases:
//
// 1. User/organization page (repo is named <username>.github.io):
//      site:  'https://yourusername.github.io'
//      base:  '/'
//
// 2. Project page (any other repo name):
//      site:  'https://yourusername.github.io'
//      base:  '/repo-name'
//
// 3. Custom domain (CNAME file in /public):
//      site:  'https://yourdomain.com'
//      base:  '/'

export default defineConfig({
  site: 'https://michaelhemmingsen.com',
base: '/',
  trailingSlash: 'ignore',
});
