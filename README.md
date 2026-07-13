This is a [TinaCMS](https://tina.io/) starter project for Vite + React.

## Local Development

Install dependencies and start the dev server (Tina + Vite):

> [!NOTE]  
> [Do you know the best package manager for Node.js?](https://www.ssw.com.au/rules/best-package-manager-for-node/) Using the right package manager can greatly enhance your development workflow. We recommend using pnpm for its speed and efficient handling of dependencies. Learn more about why pnpm might be the best choice for your projects by checking out this rule from SSW.

```
pnpm install
pnpm dev
```

- App: [http://localhost:5173](http://localhost:5173)
- Admin: [http://localhost:5173/admin/index.html](http://localhost:5173/admin/index.html)

### Building (hosted content API)

Copy `.env.example` to `.env`, fill in your values from [app.tina.io](https://app.tina.io), then:

```
pnpm build
```

No credentials yet? `pnpm build-local` builds against local content.

## Deploying

This is a client-side SPA — `pnpm build` produces one `dist/index.html` plus assets, and `react-router` decides routes in the browser. A host that only serves matching files will 404 on a direct hit or refresh of any route but `/`, so a rewrite/fallback to `index.html` is required:

- **Vercel** — `vercel.json` (included) rewrites every path to `/index.html`.
- **Cloudflare Workers** — `wrangler.jsonc` (included) sets `assets.not_found_handling: "single-page-application"`, which does the same thing. Deploy with `npx wrangler deploy` after `pnpm build`.

## Learn More

- [Tina Docs](https://tina.io/docs)
- [Getting Started](https://tina.io/docs/setup-overview/)
- [TinaCMS on GitHub](https://github.com/tinacms/tinacms)
- [Deploy on Vercel](https://tina.io/guides/tina-cloud/add-tinacms-to-existing-site/deployment/)
