
Remind Me Web application

-What is does-
Remind Me is a simple to use web app to set reminders for yourself complete
with a date and time!  Don't want to forget that song you just heard on then
radio?  Need to call dad after work next Monday?  Have a project due on by
9:30am on Wednesday?  This app will cover all these needs all while allowing
you to delete uneeded reminders, update info, and keep them nice and tidy in
a secured list.

Users can sign-up, sign-in, change their password, and
sign out.  All iformation is stored on a back-end api, your reminders will
never be lost!

-Approach-
The back end was built first.  Thought it would be easiest to build the API and
database scaffolds for users and reminders.  Scripts were written for CRUD
actions and tested through the console. Once all CRUD was correctly working with
curl scripts, it was time to start work on the front end.

First the authentication actions were written.  This would require the least
amount of coding and made for a familiar place to start.  Using some showRemindersTemplate
html/css authentication fields were made and linked to the proper JS files.

Next up the CRUD actions for the app itself were written. Create a list items,
update a list item, delete a list item, and get the list itself.  This was
accomplished through ajax calls to the api and jquery to manipulate the DOM.

Handlebars was chosen to take care of the list.  This enabled a simple drop-down
style list that could assign ID's to the list items as they were created.

-Unresolved problems/room for improvement-
The HTML and CSS definitely need to be revamped.  They couldn't get any more simple
and aren't very pleasant to look at.  Probably include bootstrap here to give
the site a facelift.

Need to reload the list when updates, deletions, and new reminders are made.
It doesn't break the page, but it would be a lot better for the user if they
didn't have to manually refresh the page in between actions.

-User Stories-
As a user I want to sign up for an account.
As a user I want to log in to a personal account.
As a user I want to sign out of my account.
As a user I want an option to change my password.
As a user I want to store a few lines of text as my reminder.
As a user I want to update reminders.
As a user I want to delete reminders.
As a user I want to be able to retrieve these reminders at a later date.

-Front End Wireframe-
http://i.imgur.com/dHSk95k.jpg

-Deployed app-
https://roryenright.github.io/RemindMeFrontEnd/

-Back-end repo-
https://github.com/RoryEnright/RemindMeBackEnd
