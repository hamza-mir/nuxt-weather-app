import { resolveAlias } from "nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	store: {
		// Path to your Vuex store (usually store/index.js)
		path: "./store/index.js",
	},
});
