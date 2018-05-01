# Readable Web Application

This is the final assessment project for Udacity's Redux course where users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the front-end portion of the project.

## Installation

* Install and start the API server. Install yarn or use npm if yarn doesn't exist. 
    - `cd api-server`
    - `yarn add package.json`
    - `yarn start`
* In another terminal window, install and start the frontend project. Install yarn or use npm if yarn doesn't exist. 
    - `cd app`
    - `yarn add package.json`
    - `yarn start`

## User Stories 

The following functionalities are implemented: 

[ * ] The application requires only npm install and npm start to install and launch.<br/>
[ * ] A README is included with the project. The README includes clear instructions for installing and launching the project.<br/>
[ * ] Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.<br/>
    [ * ] Form inputs and controlled components may have some state handled by the component.<br/>
[ * ] Updates are triggered by dispatching action creators to reducers.Reducers and actions are written properly and correctly return updated state to the store. <br/>
[ * ] Listed posts are displayed with the following:
```
1) Title
2) Author
3) Number of comments
4) Current score
5) Voting mechanism to upvote or downvote the post
6) Buttons or links for editing or deleting that post
```
[ * ] The comment count, edit/delete buttons or links, and upvote/downvote features are required on this page in order to enable the user to manage the posts without navigating away.

[ * ] The voting mechanism works and correctly displays the new vote score after clicking.

[ * ] List posts link to the detail page for that post.

[ * ] All posts are listed at the root.

[ * ] All posts for a category are listed at /:category

[ * ] List pages (root or category) include a mechanism for sorting by date or by score (at a minimum), and the sort works properly.

[ * ] List pages include a button to add a new post.

[ * ] All available categories are visible in any list view. </br>

[ * ] Post detail is available at /:category/:post_id </br>
Post is displayed with the following:
```        
        1) Title
        2) Body
        3) Author
        4) Number of comments
        5) Current score
        6) Voting mechanism to upvote or downvote the post
        7) Buttons or links for editing or deleting that post

        Listed comments are displayed with the following:
        1) Author
        2) Current score
        3) Voting mechanism to upvote or downvote the comment
        4) Buttons or links for editing or deleting that comment

```
<br/>
[ * ] The voting mechanism works and correctly displays the new vote score after clicking for both the post and comments.

[ * ] All comments for a post are displayed below the post body.

[ * ] A mechanism for adding a new comment is visible on the detail page and functional.

[ * ] Application has a form for creating a new post. Submitting the form properly adds the post to the correct category.

[ * ] Application has a form for adding comments to a post. Submitting the form properly adds the comment to the correct post.

[ * ] Edit buttons for posts/comments open a form with existing data pre-populated. Submitting the form correctly updates the data for the comment/post.

[ * ] A mechanism for deleting posts and comments exists. Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at its URL. When a user goes to a deleted post’s URL, a 404 page is displayed.

[ * ] User is able to navigate between categories, main page and post detail pages without typing address in the address bar.

## Project Structure 
```

├── public
├── src
|   └── components  // reusable components in this readable application
|   ├── constants   // string constants
|   └── containers  // view component that wrapped smaller reusable components
|   ├── models      // data model
|   └── redux       // contains all the codes related to redux
|   ├── services    // contains different services serving single responsibility
|   └── styles      // where all the scss, css are stored and generated
|   └── App.js      // main component of the entire app
|   └── index.js    // entry point
|   └── registerServiceWorker.js
├── .env            // contains the environment variables of this application
├── .gitignore      // indicates the files shouldn't be pushed to git
├── package.json    // npm config file on the dependencies or script, etc
├── README.md       

```
## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/zRj1B8z' title='Video Walkthrough 1' width='' alt='Video Walkthrough 1' />

<img src='https://imgur.com/a/sodoFrd' title='Video Walkthrough 2' width='' alt='Video Walkthrough 2' />

## Readable API Server 

This application requires backend support from the API Server in this repositiory. Please refer to [here](https://github.com/mint26/readable/blob/master/api-server/README.md) for more information on the backend set up. 

## Configuring the API Server

To access the backend server in your code, we have stored the URL to the API server in the environment variable `REACT_APP_API_URL` which you can access in your code using `process.env.REACT_APP_API_URL`. The value of this environment variable is stored in the `app/.env` file. 


## Notes

The codes can be further refactored for better performance and maintainability: </br>
* Modularizing the actions and reducers
* Making use of ES6 destructuring syntax 
* Some duplication of codes can be further reduced. 
* Implementing unit testing to make the application more robust
* Improve on the UI design


## License 
Copyright 2018 Tan Hui Min 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.