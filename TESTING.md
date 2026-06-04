**The website must contain a drop-down which lists five users**
*Verified in the browser that a dropdown menu is displayed containing five user options.*

**Selecting a user must display the list of bookmarks for the relevant user**
*After adding bookmarks for a specific user, the page was refreshed and that user was selected from the dropdown. The correct bookmarks were displayed, confirming user-specific data rendering.*
![Correct user's bookmarks displayed](./screenshots/Correct%20User's%20Bookmarks%20Screenshot.png)

**If there are no bookmarks for the selected user, a message is displayed to explain this**
*A user account with no bookmarks was selected, and the following message was displayed correctly:*

  *This user does not yet have any bookmarks. Please use the form above to add a new one.*
![No bookmarks message](./screenshots/No%20Bookmarks%20Message.png)

**The list of bookmarks must be shown in reverse chronological order**
*Multiple bookmarks were added and their createdAt timestamps were checked. The bookmarks are displayed in reverse chronological order (newest first).*



**Each bookmark has a title, description and created at timestamp displayed**
*Confirmed in the browser that each bookmark displays a title, description, and created-at timestamp.*

**Each bookmark’s title is a link to the bookmark’s URL**
*Verified that clicking a bookmark title redirects to the correct URL.*

**Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark**
*The copy-to-clipboard button was tested and confirmed to copy the correct URL, which was validated by pasting it elsewhere.*

**Each bookmark's like counter works independently, and persists data across sessions**
*The like button on multiple bookmarks has been tested manully. Each counter increments independently when clicked. After refreshing the browser, the like counts persist correctly.*

**The website must contain a form with inputs for a URL, a title, and a description. The form should have a submit button.**
*Confirmed that the form includes URL, title, description inputs, and a submit button in the page*
![New Bookmark Form](./screenshots/Booksmarks%20Form.png)

**Submitting the form adds a new bookmark for the relevant user only**
*A new bookmark was submitted for a selected in the page user and confirmed to appear only under that user. Other users were unaffected.*

**After creating a new bookmark, the list of bookmarks for the current user is shown, including the new bookmark**
*After submission manully in the page, the bookmark list updates immediately and displays the new bookmark without requiring a refresh.*

**The website must score 100 for accessibility in Lighthouse**
*Lighthouse audits were run in Chrome DevTools (mobile and desktop), achieving a 100 accessibility score*

**Unit tests must be written for at least one non-trivial function**
*buildUpdatedBookmarks creates a new bookmark object using the provided link, title, and desc, adds a createdAt timestamp and a default likes value, and returns a new array with the bookmark placed at the front.*

*In script.test.js, the following two tests were written:*

*Test 1*
*Checks that adding a new bookmark increases the total number of items in the array.*

*Test 2*
*Checks that the new bookmark is added at the front of the array with the correct url, title, and desc values.*


