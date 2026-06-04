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

  test("adds a <select> element with id 'user-dropdown'", () => {
    getUserIds.mockReturnValue([]);

    createUserDropdown();

    const select = document.querySelector("#user-dropdown");
    expect(select).not.toBeNull();
    expect(select.tagName).toBe("SELECT");
  });

  test("sets a default placeholder option as the first option", () => {
    getUserIds.mockReturnValue([]);

    createUserDropdown();

    const options = document.querySelectorAll("#user-dropdown option");
    expect(options).toHaveLength(1);
    expect(options[0].value).toBe("");
    expect(options[0].text).toBe("--Please select a user--");
  });

  test("renders one <option> per user returned by getUserIds()", () => {
    getUserIds.mockReturnValue(["1", "2", "3", "4", "5"]);

    createUserDropdown();

    const options = document.querySelectorAll("#user-dropdown option");
    expect(options).toHaveLength(6);
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
});
