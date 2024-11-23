Dedale\_mono
============


Presentation
------------

This is a monorepo that contains the following *javascript* packages:

1. nF: the entry-front of the *dedale* backend
2. nP1: a micro-service for heavy processing
3. nP2: an other micro-service for heavy processing
4. nW: the micro-service for writing the data to persistent media
5. nR1: the 1st micro-service for reading the data from persistent media
6. nR2: the 2nd micro-service for reading the data from persistent media
7. nR3: the 3rd micro-service for reading the data from persistent media
8. nR4: the 4th micro-service for reading the data from persistent media
9. dedalui: the *svelte-kit* dynamic web-ui of *dedale*
10. dedalep: the *svelte-kit* static pages of *dedale*

A public instance of *dedalep* is available on that [github-page](https://charlyoleg2.github.io/dedale_mono/).
The *code source* is available on [github](https://github.com/charlyoleg2/dedale_mono).


Prerequisite
------------

- [node](https://nodejs.org) version 20.10.0 or higher
- [npm](https://docs.npmjs.com/cli/latest/commands/npm) version 10.2.4 or higher


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


Publish a new release
---------------------

```bash
npm run versions
git commit -am 'increment sub-package versions'
npm version patch
git push
git push origin v0.5.6
```
