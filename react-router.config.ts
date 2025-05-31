import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // disable runtime server rendering
  prerender: true, // pre-render all static routes

} satisfies Config;
