import { site } from "@/lib/site";

export default function manifest() {
  return {
    name: site.name,
    short_name: "AS Media",
    description: site.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f2ec",
    theme_color: "#e4002b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
