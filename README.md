# Muzammal Hussain — portfolio

A dark, single-theme portfolio built with Next.js App Router, React Server Components, TypeScript, and Tailwind CSS. It deploys on Vercel with no extra config.

## Run

Requires Node.js 24 or newer.

```sh
npm install
cp .env.example .env.local
npm run dev
```

`.env.local` is optional. If `NEXT_PUBLIC_SITE_URL` is unset, canonical URLs use `http://localhost:3000`.

```sh
npm run lint
npm run typecheck
npm run build
```

Install scripts are disabled in `.npmrc` (`ignore-scripts=true`). The packages above do not need a postinstall to build. `unrs-resolver`, pulled in by ESLint, has a postinstall that only links a native binding already downloaded as `@unrs/resolver-binding-*`. If lint cannot load that binding, run:

```sh
node node_modules/unrs-resolver/postinstall.js
```

## Change the content

All public copy lives in `src/content/`, one file per section. Pages pass that data into components. Components do not import `src/content`.

See `src/content/README.md` for how to add a project, a skill group, or a job, and how social links stay hidden until the `TODO` href is replaced.

Images go in `public/images/`. The résumé file is `public/muzammal-resume.pdf`.

## Deploy

Push the repository to GitHub and import it in Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production origin, including `https://`. Vercel builds with `next build`. No custom server is required.
