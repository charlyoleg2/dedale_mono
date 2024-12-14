// @ts-check
import { defineConfig } from "astro/config";

const basePath = process.env.BASE_PATH;

// https://astro.build/config
export default defineConfig({
	base: basePath ? basePath : "/",
});
