import assert from "node:assert";
import test from "node:test";
import { buildUpdatedBookmarks } from "./buildUpdatedBookmarks.js";

test("New bookmark is added and list length increases", () => {
  const existing = [
    { url: "a.com", title: "A", desc: "A desc", createdAt: "2024-01-01", likes: 0 },
    { url: "b.com", title: "B", desc: "B desc", createdAt: "2024-01-02", likes: 0 },
  ];

  const result = buildUpdatedBookmarks(existing, "c.com", "C", "C desc");

  assert.equal(result.length, 3);
});

test("new bookmark is added correctly in the front", () => {
  const existing = [
    { url: "a.com", title: "A", desc: "A desc", createdAt: "2024-01-01", likes: 0 },
    { url: "b.com", title: "B", desc: "B desc", createdAt: "2024-01-02", likes: 0 },
  ];

  const result = buildUpdatedBookmarks(existing, "c.com", "C", "C desc");

  assert.equal(result[0].title, "C");
  assert.equal(result[0].desc, "C desc");
  assert.equal(result[0].url, "c.com");
});