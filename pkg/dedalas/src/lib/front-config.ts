// front-config.ts

const astroBuildMode = "static"; // 'static' or 'server'

const honoIntegrated = {
	// inClientNCors: true: hc<tApiA>(origin), false: hc<tApi>(nA)
	inClientNCors: false,
	// inClientNFetch: true: hc<tApiA>(), false: fetch()
	inClientNFetch: true,
	// inServerNFetch: true: apiA.fetch, false: fetch(nA)
	inServerNFetch: true,
};
// astroBuildMode = 'static'
// inClientNCors, inClientNFetch, inServerNFetch
// true, true, true : compile error: connection issue
// false, true, true : works
// false, false, true : works
// false, false, false : compile error: immutable

// As reminder, the svelteKit universal +page.ts-load() offer more options:
// inClientCors, inServerFetch
// true, true: ssr: sveltekit-server -> nZ (1 network transaction)
// true, true: csr: browser -> sveltekit -> nZ (2 network transaction)
// true, false: ssr: sveltekit -> nA -> nZ (2 network transaction)
// true, false: csr: browser -> sveltekit -> nA -> nZ (3 network transaction)
// false, true: ssr: sveltekit -> nA -> nZ (2 network transaction)
// false, true: csr: browser -> nA -> nZ (2 network transaction)
// false, false: ssr: sveltekit -> nA -> nZ (2 network transaction)
// false, false: csr: browser -> nA -> nZ (2 network transaction)

export { astroBuildMode, honoIntegrated };
