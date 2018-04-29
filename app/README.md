# Readable API Server

This is the starter project for the final assessment project for Udacity's Redux course where users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the backend API Server that is used to interact with the front-end portion of the project.

## Installation

* Install and start the API server. Install yarn or use npm if yarn doesn't exist. 
    - `cd api-server`
    - `yarn add package.json`
    - `yarn start`
* In another terminal window, install and start the frontend project. Install yarn or use npm if yarn doesn't exist. 
    - `cd app`
    - `yarn add package.json`
    - `yarn start`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Access The API Server

To accesss the backend server in your code, we have stored the URL to the API server in the environment variable `REACT_APP_API_URL` which you can access in your code using `process.env.REACT_APP_API_URL`. The value of this environment variable is stored in the `app/.env` file. 
