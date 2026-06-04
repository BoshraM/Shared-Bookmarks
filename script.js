import { getUserIds, getData, setData } from "./storage.js";

let selectedUser = "";

function displayBookmarks(bookmarks) {
  const bookmarksList = document.querySelector("#bookmarks-list");
  bookmarksList.innerHTML = "";

  if (bookmarks.length === 0) {
    bookmarksList.textContent =
      "This user does not yet have any bookmarks. Please use the form above to add a new one.";
    return;
  }

  const sortedBookmarks = bookmarks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  sortedBookmarks.forEach((bookmark) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h3>
        <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
      </h3>
      <p>${bookmark.desc}</p>
       <small class="small">
        Created at: ${new Date(bookmark.createdAt).toLocaleString()}
       </small>
    `;

    const likeBtn = document.createElement("button");
    likeBtn.type = "button";
    likeBtn.textContent = `Likes: ${bookmark.likes}`;

    likeBtn.addEventListener("click", () => {
      bookmark.likes += 1;
      setData(selectedUser, bookmarks);
      displayBookmarks(bookmarks);
    });

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.textContent = "Copy Bookmark Link";
    copyBtn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(bookmark.url);
    });

    li.appendChild(likeBtn);
    li.appendChild(copyBtn);
    bookmarksList.appendChild(li);
  });
}

function createUserDropdown() {
  const users = getUserIds();
  const userDropdownSection = document.querySelector("#user-dropdown-section");

  const label = document.createElement("label");
  label.htmlFor = "user-dropdown";
  label.textContent = "Select User: ";
  userDropdownSection.appendChild(label);
  userDropdownSection.appendChild(document.createElement("div"));

  const userDropdown = document.createElement("select");
  userDropdown.id = "user-dropdown";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "--Please select a user--";
  userDropdown.appendChild(defaultOption);

  users.forEach((userId) => {
    const option = document.createElement("option");
    option.value = userId;
    option.text = `User ${userId}`;
    userDropdown.appendChild(option);
  });

  userDropdownSection.appendChild(userDropdown);

  userDropdown.addEventListener("change", ({ target }) => {
    selectedUser = target.value;
    const updatedBookmarks = getData(selectedUser) || [];
    displayBookmarks(updatedBookmarks);
  });
}

function createForm() {
  const form = document.getElementById("bookmark-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!selectedUser) {
      alert("Please select a user first");
      return;
    }
    const link = document.getElementById("link").value;
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;

    const bookmark = {
      url: link,
      title: title,
      desc: desc,
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    const existingBookmarks = getData(selectedUser) || [];

    const updatedBookmarks = [bookmark, ...existingBookmarks];

    setData(selectedUser, updatedBookmarks);

    displayBookmarks(updatedBookmarks);
  });
}

window.onload = function () {
  createUserDropdown();
  createForm();
};

export { displayBookmarks, createUserDropdown };
