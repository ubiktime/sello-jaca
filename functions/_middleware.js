export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "sello-jaca.pages.dev" || url.hostname.endsWith(".sello-jaca.pages.dev")) {
    return Response.redirect(`https://sellojaca.es${url.pathname}${url.search}`, 301);
  }
  return context.next();
}