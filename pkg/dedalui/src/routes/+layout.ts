// +layout.ts [root]

import { frontCfg } from '$lib/front-config';

export const prerender = frontCfg.prerender; // default: false. if true, generate pages at build time and disable ssr-mode
export const ssr = frontCfg.ssr; // default: true. if true, ssr-mode. if false, csr-mode
export const csr = frontCfg.csr; // default: true. if false, remove javascript from page
