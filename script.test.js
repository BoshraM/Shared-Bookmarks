import { createUserDropdown } from "./script.js";
import { getUserIds, getData } from "./storage.js";

jest.mock("./storage.js", () => ({
  getUserIds: jest.fn(),
  getData: jest.fn(),
  setData: jest.fn(),
}));

describe("createUserDropdown()", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="user-dropdown-section"></div>
      <ul id="bookmarks-list"></ul>
      <form id="bookmark-form">
        <input id="link" />
        <input id="title" />
        <input id="desc" />
      </form>
    `;

    jest.clearAllMocks();
  });

  test("adds a label with correct 'for' attribute and text", () => {
    getUserIds.mockReturnValue([]);

    createUserDropdown();

    const label = document.querySelector("label");
    expect(label).not.toBeNull();
    expect(label.htmlFor).toBe("user-dropdown");
    expect(label.textContent).toBe("Select User: ");
  });
});
