This is a [TinaCMS](https://tina.io/) starter project for Vite + React.

## Local Development

Install dependencies and start the dev server (Tina + Vite):

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

## Learn More

- [Tina Docs](https://tina.io/docs)
- [Getting Started](https://tina.io/docs/setup-overview/)
- [TinaCMS on GitHub](https://github.com/tinacms/tinacms)
