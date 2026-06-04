1. The website must contain a drop-down which lists five users
   Test: Unit testing
   Unit test created to ensure that:

- dropdown has a label with the correct attributes
- dropdown has a default placeholder prompting user selection
- dropdown has a select element
- each user is assigned option element
- each user option element has the correct value and label
- dropdown calls the correct user data when selected

2. Selecting a user must display the list of bookmarks for the relevant user
   Test: Manual testing
   Screenshot

3. If there are no bookmarks for the selected user, a message is displayed to explain this
   Test: Manual testing
   Screenshot

4. The list of bookmarks must be shown in reverse chronological order
   Test: Manual testing
   Added new bookmarks and ensured that new ones appeared first

5. Each bookmark’s title is a link to the bookmark’s URL
   Test: Manual testing
   Clicking title opens correct url in new browser tab

6. Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark
   Test: Manual testing
   Clicking "Copy to clipboard" button matched url link

7. Each bookmark's like counter works independently, and persists data across sessions
   Test: Manual testing
   Clicked like buttons to verify they incremented independently. Confirmed persistence by refreshing the page to see that bookmarks were still present

8. The website must contain a form with inputs for a URL, a title, and a description. The form should have a submit button.
   Test: Manual testing
   Screenshot

9. Submitting the form adds a new bookmark for the relevant user only
   Test: Manual testing
   Checked that new bookmark isn't added to unselected users

10. After creating a new bookmark, the list of bookmarks for the current user is shown, including the new bookmark
    Test: Manual
    Screenshot

11. The website must score 100 for accessibility in Lighthouse
    Test: Manual Testing (Goodle Chrome Lighthouse)
    Screenshot

12. Unit tests must be written for at least one non-trivial function
    Test: Unit tests in script.test.js
