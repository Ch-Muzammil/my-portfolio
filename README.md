# Muzammal Hussain — portfolio

A dark, single-theme portfolio built with Next.js App Router, React Server Components, TypeScript, and Tailwind CSS. It deploys on Vercel. The contact form sends through [Resend](https://resend.com).

## Run

Requires Node.js 24 or newer.

```sh
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, copy the env file with `Copy-Item .env.example .env.local`.

Fill `RESEND_API_KEY` in `.env.local`. Without it the form stays on screen and replies that the message did not send. `.env.local` is gitignored. If `NEXT_PUBLIC_SITE_URL` is unset, canonical URLs use `http://localhost:3000`.

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

Images go in `public/images/`. Résumé files live in `public/resumes/`: the Software Engineer CV and the Frontend Engineer CV. The header and footer stay a single Résumé link to `/resume`.

## Deploy

Push the repository to GitHub and import it in Vercel. In the project settings, add these environment variables for Production, then redeploy:

- `NEXT_PUBLIC_SITE_URL` — the live origin, including `https://`. This is read at build time.
- `RESEND_API_KEY` — the same key as in `.env.local`. Never commit it.

Leave `RESEND_FROM` unset until a domain is verified in Resend. Until then, mail is delivered to the Gmail on the Resend account. Vercel builds with `next build`. No custom server is required.
