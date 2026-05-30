import { getUserIds } from "./storage.js";

function createUserDropdown() {
  const users = getUserIds();
  const body = document.querySelector("body");

  const dropdown = document.createElement("select");
  dropdown.id = "user-dropdown";

  const label = document.createElement("label");
  label.htmlFor = "user-dropdown";
  label.textContent = "Select User: ";
  body.appendChild(label);

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "--Please select a user--";
  dropdown.appendChild(defaultOption);

  users.forEach((userId) => {
    const option = document.createElement("option");
    option.value = userId;
    option.text = `User ${userId}`;
    dropdown.appendChild(option);
  });

  body.appendChild(dropdown);
}

window.onload = function () {
  createUserDropdown();
};
