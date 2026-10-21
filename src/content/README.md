# Content

Edit these files to make this portfolio yours. Components read nothing from this folder. Pages import the data and pass it in as props, so a fork can change the words without opening a component.

| File            | What it controls                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `site.ts`       | Name, role, document title, default description, location, email, résumé path, social links, and the public site URL (`NEXT_PUBLIC_SITE_URL`, default `http://localhost:3000`). |
| `nav.ts`        | Header links, résumé link, and the “Let’s talk” link.                                                                                                                           |
| `hero.ts`       | Home headline, intro, actions, stats, caption, and hero image.                                                                                                                  |
| `tech-strip.ts` | The scrolling technology names under the hero.                                                                                                                                  |
| `projects.ts`   | Every project and the work-page labels. The array order is the display order. The first project is the featured project on the home page.                                       |
| `skills.ts`     | Core stack and skill groups.                                                                                                                                                    |
| `about.ts`      | About copy, portrait text, stats, quote, and the about-page intro.                                                                                                              |
| `experience.ts` | Jobs, the experience-page intro, and the résumé-page intro.                                                                                                                     |
| `contact.ts`    | Contact panel, contact page, form labels, and the mailto message.                                                                                                               |
| `footer.ts`     | Footer line and the footer contact link.                                                                                                                                        |

Social `href` values that start with `TODO` are not rendered. Replace `TODO` with a real `https://` URL and the link appears. Do not leave a fake button in its place.

The résumé file is `public/muzammal-resume.pdf`. Point `site.resumePath` at it.

## Add a project

1. Add a folder under `public/images/projects/{slug}/` with:
   - `card.jpg` (1600×1000) — home / work grid
   - `cover.jpg` (2000×1250) — detail page hero
   - optional later: `dashboard.jpg`, `flow.jpg` for the gallery
2. Append an object to the `projects` array in `projects.ts`.
3. Set `slug` to a unique URL segment. The page is `/work/[slug]`.
4. Set `category` to one of the names in `filters`, or add a new filter name to that list.
5. Fill `image` / `cover` width and height with each file’s pixel size.

No component change is required. Unknown slugs 404.

## Add a skill group

Append an object to `groups` in `skills.ts`:

```ts
{ label: "Platform", skills: ["Node.js", "PostgreSQL"] }
```

The count next to the label is `skills.length`.

## Add a job

Append an object to `items` in `experience.ts`. Set `current: true` on the role you hold now, and `current: false` on the others. The timeline renders every item in array order.
