import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, // public — from app.tina.io
  branch:
    process.env.TINA_PUBLIC_BRANCH || // custom branch override
    process.env.VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD || // Netlify branch env
    "main",
  token: process.env.TINA_TOKEN, // secret — never shipped to the browser
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Page Content",
        name: "page",
        path: "content/page",
        format: "mdx",
        fields: [
          {
            name: "body",
            label: "Main Content",
            type: "rich-text",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) =>
            document._sys.filename === "home"
              ? "/"
              : `/${document._sys.filename}`,
        },
      },
    ],
  },
});
