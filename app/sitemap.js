export default function sitemap() {
  const baseUrl = 'https://rulingout.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/careers',
    '/contact',
    '/login'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
