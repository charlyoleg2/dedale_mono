Dynamic frontend dedalui
========================

Presentation
------------

This package contains the [sveltekit](https://svelte.dev/) frontend *dedalui*.


Dev
---

```bash
git clone https://github.com/charlyoleg2/dedale_mono
cd dedale_mono
npm i
npm -w dedalui run clean
npm -w dedalui run ci
npm -w dedalui run preview
open http://localhost:4173
npm run test_dedalui
```

Configuration
-------------

*dedalui* can be configured via the file `src/lib/front-config.ts`.
The backend *nA* can be integrated or not in *sveltekit*.
*sveltekit* can run as SSR, CSR or prerender.
