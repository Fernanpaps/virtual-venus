import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Blog de Fernando',
    description: 'Mi camino aprendiendo Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    customData: `<language>es-mx</language>`,
  });
}
