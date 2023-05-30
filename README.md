# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




## Components

### `aboutme.tsx`
Contains the "About Me" section information.

The profile image, along with the font size, color, and style can be adjusted by altering the "className" attributes. 

Add a description by updating the paragraph element.

### `contact.tsx`
Controls the "Contact Me" text box at the bottom of the page.

Adjust the styling of the text box by adjusting the respective attributes tag.

Change the size of the text box by changing the row and col values, and change the maximum number of characters by changing the value of "maxLength," all of which are found in the "textarea" tag.

Set where the input message is sent to by changing the url for the "form action" variable.

### `footer.tsx`
Controls the social media links found at the top and bottom of the page, as well as the contact form at the bottom.

Includes support for Twitter, Instagram, GitHub, Youtube, and LinkedIn.\
To add a social media, update the corresponding href with a link.

### `header.tsx`
Controls the title and banner of the page.

Update the header content and styling in the h1 tag; Change the background banner by changing the url in the "backgroundImage" variable.

### `navbar.tsx`
Controls the page redirect tabs at the top of the page. The default tabs are "Home", "About Me", "Skills", and "Content."

Tab names and where they redirect can be edited by altering the div matching the tab's name.

### `projects.tsx` 
Controls the "Content" section where you can display projects, blogs, videos, or other content. 

Add content descriptions, thumbnails, and links by filling out the "projects" function.

Additional project cards can be created by adding additional project id number, as well as including a title, description and thumbnail that matches the predefined formatting.

### `projectscard.tsx`
Controls the styling of the project, blog, and video icons.

Styling changes will be reflected across all of the project icons.

### `skills.tsx`
Controls the content of the "skills" shuffle bar.

Each skill icon has its own div, in which you can edit the name and image of each icon.

