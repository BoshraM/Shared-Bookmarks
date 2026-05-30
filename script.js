import { getUserIds } from "./storage.js";

function createUserDropdown() {
  const users = getUserIds();
  const body = document.querySelector("body");

  const label = document.createElement("label");
  label.htmlFor = "user-dropdown";
  label.textContent = "Select User: ";
  body.appendChild(label);
  body.appendChild(document.createElement("div"));

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

  body.appendChild(userDropdown);

  userDropdown.addEventListener("change", ({ target }) => {
    console.log(`Selected user: ${target.value}`);
  });
}

window.onload = function () {
  createUserDropdown();
};
