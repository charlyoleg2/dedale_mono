Dedale\_mono
============


Presentation
------------

This is a monorepo that contains the following *javascript* packages:

1. nF: the entry-front of the *dedale* backend
2. nW: the micro-service for writting the data
3. dedalex: the *svelte-kit* web-ui of *dedale*
4. dedales: the *svelte-kit* static website of *dedale*

A public instance of *dedales* is available on that [github-page](https://charlyoleg2.github.io/dedale_mono/).
The *code source* is available on [github](https://github.com/charlyoleg2/dedale_mono).


Prerequisite
------------

- [node](https://nodejs.org) version 20.10.0 or higher
- [npm](https://docs.npmjs.com/cli/v7/commands/npm) version 10.2.4 or higher


Develop the Dedale
------------------

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
npm -w dedalex run check
npm -w dedales run build
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
