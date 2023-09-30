import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from "svelte-adapter-bun";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
