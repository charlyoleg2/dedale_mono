Dedale\_mono
============


Presentation
------------

The purpose of the project *Dedale* is to experiment different integrations of frontend-frameworks and [hono](https://hono.dev/):
- [svelteKit](https://svelte.dev/) and *hono*
- [astro](https://astro.build) and *hono*


*Dedale\_mono* is a monorepo that contains the following *javascript* packages:

1. nA: the entry-front of the *dedale* backend
2. nZ: a micro-service for other processing
3. dedalui: the *svelte-kit* dynamic web-ui of *dedale*
4. dedalep: the *svelte-kit* static pages of *dedale*
5. back-config: the configuration of the backend

Below an example of a more distributed backend for a large application with many users:

1. nA: the entry-front of the *dedale* backend
2. nP1: a micro-service for heavy processing
3. nP2: an other micro-service for heavy processing
4. nW: the micro-service for writing the data to persistent media
5. nR1: the 1st micro-service for reading the data from persistent media
6. nR2: the 2nd micro-service for reading the data from persistent media
7. nR3: the 3rd micro-service for reading the data from persistent media
8. nR4: the 4th micro-service for reading the data from persistent media
9. dedalui: the *svelte-kit* dynamic web-ui of *dedale*
10. dedalep: the *svelte-kit* static pages of *dedale*
11. back-config: the configuration of the backend

A public instance of *dedalep* is available on that [github-page](https://charlyoleg2.github.io/dedale_mono/).
The *code source* is available on [github](https://github.com/charlyoleg2/dedale_mono).


Outcomes of experimentations
----------------------------

### SvelteKit / Hono

Editing the file `pkg/dedalui/src/lib/front-config.ts`, let you expiriment the *prerender*, *ssr*, *csr* configurations.
This front-end configuration provides up to 64 combinations.

For getting a static website with *Sveltekit*, I see two limitations:
- *Hono* can not be integrated. *Hono* must be accessed with *fetch* (By the way, *Hono* integration works well is not prerendered).
- *Sveltekit-csr* must be set to false to avoid the hydratation. But then all *javascript* of client is gone!

With *sveltekit v2.9.0*, I don't find a way to disable *hydratation* without removing the all *javascript* of client.


Prerequisite
------------

- [node](https://nodejs.org) version 20.10.0 or higher
- [npm](https://docs.npmjs.com/cli/v10/commands/npm) version 10.2.4 or higher


Develop Dedale
--------------

```bash
git clone https://github.com/charlyoleg2/dedale_mono
cd dedale_mono
npm i
npm run ci
npm run preview
```

Other useful commands:
```bash
npm run ci2
npm run clean
npm run ls-pkg
npm -w dedalui run check
npm -w dedalep run build
npm run dev
```

Configurations
--------------

### Backend configuratiom

Host and port-number of backend nodes are configurable in the file `pkg/back-config/src/index.ts`.

### Frontend configuration

Prerender, SSR, CSR and others are configurable in the file `pkg/dedalui/src/lib/front-config.ts`.


Using the backends
------------------

Exported functions are documented with [TypeDoc](https://charlyoleg2.github.io/dedale_mono/docs/apidoc/).

Rest-API is documented with [OpenAPI](http://localhost:3010/doc) and can be tried with [swagger-ui](http://localhost:3010/swagger).

The backend Rest-API can also be tested/experimented with external tools like:
- [curl](https://curl.se/)
- [wget](https://www.gnu.org/software/wget/manual/html_node/index.html)
- [Restfox](https://restfox.dev/)
- [Hoppscotch](https://hoppscotch.io/)
- [Firecamp](https://firecamp.io/)
- [Bruno](https://www.usebruno.com/)


Publish a new release
---------------------

```bash
npm run versions
git commit -am 'increment sub-package versions'
npm version patch
git push
git push origin v0.5.6
```
