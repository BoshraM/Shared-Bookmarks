export function buildUpdatedBookmarks(existingBookmarks, link, title, desc) {
  const bookmark = {
    url: link,
    title,
    desc,
    createdAt: new Date().toISOString(),
    likes: 0,
  };

  return [bookmark, ...existingBookmarks];
}