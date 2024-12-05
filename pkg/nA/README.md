backend node nA
===============

Presentation
------------

This package contains the backend node *nA*, which is the *entry point* of the backend.


Dev
---

```bash
git clone https://github.com/charlyoleg2/dedale_mono
cd dedale_mono
npm i
npm -w nA run clean
npm -w nA run ci
npm -w nA run run_n
open http://localhost:3000/doc
open http://localhost:3000/swagger
npm run test_nA
```

