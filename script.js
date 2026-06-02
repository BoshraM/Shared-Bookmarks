import { getUserIds } from "./storage.js";

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
    console.log(`Selected user: ${target.value}`);
  });
}

const form = document.getElementById("bookmark-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
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
 
  console.log(bookmark);
});

window.onload = function () {
  createUserDropdown();
};
