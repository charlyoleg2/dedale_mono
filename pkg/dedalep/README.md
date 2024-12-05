Static frontend dedalep
=======================

Presentation
------------

This package contains the static [sveltekit](https://svelte.dev/) frontend *dedalep*.
The generated pages can be used on [github-pages](https://charlyoleg2.github.io/dedale_mono/).


Dev
---

```bash
git clone https://github.com/charlyoleg2/dedale_mono
cd dedale_mono
npm i
npm -w dedalep run clean
npm -w dedalep run ci
npm -w dedalep run preview
open http://localhost:4173
```

Configuration
-------------

*dedalep* can be configured via the file `src/lib/front-config.ts`.
