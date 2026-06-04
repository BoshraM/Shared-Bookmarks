import { createUserDropdown } from "./script.js";
import { getUserIds, getData } from "./storage.js";

// Mock the storage module
jest.mock("./storage.js", () => ({
  getUserIds: jest.fn(),
  getData: jest.fn(),
  setData: jest.fn(),
}));

describe("createUserDropdown()", () => {
  beforeEach(() => {
    // Set up the DOM elements the function depends on
    document.body.innerHTML = `
      <div id="user-dropdown-section"></div>
      <ul id="bookmarks-list"></ul>
      <form id="bookmark-form">
        <input id="link" />
        <input id="title" />
        <input id="desc" />
      </form>
    `;

    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  // --- Rendering ---

  test("appends a label with correct 'for' attribute and text", () => {
    getUserIds.mockReturnValue([]);

    createUserDropdown();

    const label = document.querySelector("label");
    expect(label).not.toBeNull();
    expect(label.htmlFor).toBe("user-dropdown");
    expect(label.textContent).toBe("Select User: ");
  });

  test("appends a <select> element with id 'user-dropdown'", () => {
    getUserIds.mockReturnValue([]);

    createUserDropdown();

    const select = document.querySelector("#user-dropdown");
    expect(select).not.toBeNull();
    expect(select.tagName).toBe("SELECT");
  });

  test("renders a default placeholder option as the first option", () => {
    getUserIds.mockReturnValue([]);

    createUserDropdown();

    const options = document.querySelectorAll("#user-dropdown option");
    expect(options).toHaveLength(1);
    expect(options[0].value).toBe("");
    expect(options[0].text).toBe("--Please select a user--");
  });

  test("renders one <option> per user returned by getUserIds()", () => {
    getUserIds.mockReturnValue(["1", "2", "3"]);

    createUserDropdown();

    // +1 for the default placeholder option
    const options = document.querySelectorAll("#user-dropdown option");
    expect(options).toHaveLength(4);
  });

  test("sets correct value and label on each user option", () => {
    getUserIds.mockReturnValue(["42", "99"]);

    createUserDropdown();

    const options = document.querySelectorAll("#user-dropdown option");
    expect(options[1].value).toBe("42");
    expect(options[1].text).toBe("User 42");
    expect(options[2].value).toBe("99");
    expect(options[2].text).toBe("User 99");
  });

  test("renders an empty dropdown (only placeholder) when getUserIds returns []", () => {
    getUserIds.mockReturnValue([]);

    createUserDropdown();

    const options = document.querySelectorAll("#user-dropdown option");
    expect(options).toHaveLength(1);
    expect(options[0].value).toBe("");
  });

  // --- Change event ---

  test("calls getData with the selected user id when dropdown changes", () => {
    getUserIds.mockReturnValue(["7"]);
    getData.mockReturnValue([]);

    createUserDropdown();

    const select = document.querySelector("#user-dropdown");
    select.value = "7";
    select.dispatchEvent(new Event("change", { bubbles: true }));

    expect(getData).toHaveBeenCalledWith("7");
  });

  test("calls getData with an empty string when the placeholder option is re-selected", () => {
    getUserIds.mockReturnValue(["7"]);
    getData.mockReturnValue([]);

    createUserDropdown();

    const select = document.querySelector("#user-dropdown");

    // Select a real user first, then switch back to placeholder
    select.value = "7";
    select.dispatchEvent(new Event("change", { bubbles: true }));

    select.value = "";
    select.dispatchEvent(new Event("change", { bubbles: true }));

    expect(getData).toHaveBeenLastCalledWith("");
  });

  test("displays empty-state message when selected user has no bookmarks", () => {
    getUserIds.mockReturnValue(["5"]);
    getData.mockReturnValue([]); // no bookmarks

    createUserDropdown();

    const select = document.querySelector("#user-dropdown");
    select.value = "5";
    select.dispatchEvent(new Event("change", { bubbles: true }));

    const bookmarksList = document.querySelector("#bookmarks-list");
    expect(bookmarksList.textContent).toMatch(
      /does not yet have any bookmarks/i,
    );
  });

  test("displays bookmarks when selected user has existing bookmarks", () => {
    getUserIds.mockReturnValue(["3"]);
    getData.mockReturnValue([
      {
        url: "https://example.com",
        title: "Example",
        desc: "An example site",
        createdAt: new Date().toISOString(),
        likes: 0,
      },
    ]);

    createUserDropdown();

    const select = document.querySelector("#user-dropdown");
    select.value = "3";
    select.dispatchEvent(new Event("change", { bubbles: true }));

    const bookmarksList = document.querySelector("#bookmarks-list");
    expect(bookmarksList.querySelector("li")).not.toBeNull();
    expect(bookmarksList.textContent).toContain("Example");
  });
});
