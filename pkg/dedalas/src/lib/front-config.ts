// front-config.ts

const astroBuildMode = "static"; // 'static' or 'server'

const honoIntegrated = {
	// inClientNCors: true: hc<tApiA>(origin), false: hc<tApi>(nA)
	inClientNCors: false,
	// inClientNFetch: true: hc<tApiA>(), false: fetch()
	inClientNFetch: true,
	// inClientNAstroGet: true: hc<tApiA>(), false: Astro-GET()
	inClientNAstroGet: true,
	// inServerNFetch: true: apiA.fetch, false: fetch(nA)
	inServerNFetch: true,
};
// astroBuildMode = 'static'
// inClientNCors, inClientNFetch, inClientNAstroGet, inServerNFetch
// true, true, true, true : compile error: connection issue
// false, true, true, true : works
// false, false, true, true : works
// false, false, true, false : compile error: immutable
// true, true, false, true : compile error: HonoOpenApi read undefined property 'method'

// Astro lacks the equivalent of SvelteKite +page.ts load() universal code to call endpoints without network

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
