// front-config.ts

const frontCfg = {
	prerender: false, // generate html at build time
	ssr: true, // generate complete html on the server side
	csr: true // if false, remove all javascript of browser
};
// prerender, ssr
// true, true: many pages prepared for static-website
// true, false: skeleton pages prepared for static-website
// false, true: classic ssr + hydratation
// false, false: classic csr (skeleton + json browser rendering)

// prerender=true and ssr=true generates lot of compilation errors
// but prerender=true, ssr=true and inClientNCors=false works

const honoIntegrated = {
	// inClientNCors: true: hc<tApiA>(origin), false: hc<tApi>(nA)
	inClientNCors: false,
	// inClientNFetch: true: hc<tApiA>(), false: fetch()
	inClientNFetch: true,
	// inServerNFetch: true: apiA.fetch, false: fetch(nA)
	inServerNFetch: true
};
// inClientCors, inServerFetch
// true, true: ssr: sveltekit-server -> nZ (1 network transaction)
// true, true: csr: browser -> sveltekit -> nZ (2 network transaction)
// true, false: ssr: sveltekit -> nA -> nZ (2 network transaction)
// true, false: csr: browser -> sveltekit -> nA -> nZ (3 network transaction)
// false, true: ssr: sveltekit -> nA -> nZ (2 network transaction)
// false, true: csr: browser -> nA -> nZ (2 network transaction)
// false, false: ssr: sveltekit -> nA -> nZ (2 network transaction)
// false, false: csr: browser -> nA -> nZ (2 network transaction)

export { frontCfg, honoIntegrated };
