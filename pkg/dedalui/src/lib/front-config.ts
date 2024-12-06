// front-config.ts

const frontCfg = {
	prerender: false, // generate html at build time
	ssr: true, // generate complete html on the server side
	csr: true // if false, remove all javascript of browser
};
const honoIntegrated = {
	inClient: false,
	inServer: true
};

export { frontCfg, honoIntegrated };
