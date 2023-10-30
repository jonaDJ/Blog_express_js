# Blog_express_js

This README provides an overview of your Blog Express.js application and the technologies you used. It includes a brief description, dependencies, project structure, and other important details. This will help users understand your project and get started with it.

## Project Description
This is a Blog application built using Express.js, MongoDB, EJS for templating, and Node.js. It allows users to create, read, update, and delete blog posts. The application uses the Mongoose library to interact with a MongoDB database for storing and managing blog posts.

## Project Structure
The project is organized as follows:
   ```
   |-- controllers
   |-- models
   |-- public
   |-- routes
   |-- views
   |app.js
   ```

- `controllers`: Contains the controller files that handle various functionalities of the application.

- `models`: Includes the data models for the blog posts using Mongoose.

- `public`: Houses the static assets, in this case, a `style.css` file for styling your application.

- `routes`: Contains route files to define the various routes for the application.

- `views`: Holds the EJS templates used for rendering views in the application.

- `app.js`: This is the main application file that configures and runs your Express.js server.

## Dependencies
You have listed the following dependencies in your `package.json` file:

- **express:** A minimal and flexible Node.js web application framework.
- **mongoose:** An Object Data Modeling (ODM) library for MongoDB, which allows you to interact with MongoDB in a more structured way.
- **ejs:** A simple templating language that allows you to embed JavaScript code within HTML templates.
- **morgan:** A middleware for logging HTTP requests to the console.
- **nodemon:** A development utility that automatically restarts the server when you make changes to your code.

## CRUD Operations

The application supports the following CRUD operations for managing blog posts:

- **Create**: Users can create new blog posts by submitting a form with the post content.

- **Read**: Users can view a list of existing blog posts and click on individual posts to read them in detail.

- **Update**: Users can edit and update existing blog posts by clicking on an "Edit" button.

- **Delete**: Users can delete blog posts by clicking on a "Delete" button.


## Installation

To set up and run the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project's root directory.
3. Run the following command to install the project dependencies:
   ```
   ## npm install
4. Start the application by running:
   ```
   ## npm start
This will start the server, and you can access the application in your web browser at `http://localhost:3000`.

## Usage

The application should now be running locally. You can use it to create, read, update, and delete blog posts. You can access the different routes defined in your application's `routes` folder and customize it as needed.

## Additional Pages and Routes

The application also includes the following additional pages and routes:

1. **About Page**: `/about`
![About Page](https://user-images.githubusercontent.com/145041345/278760308-eec77d6a-2c7f-45cb-918d-71cac9acd71b.png)

2. **Blogs Page**: `/blogs`
![Blogs Page](https://user-images.githubusercontent.com/145041345/278760270-0d0382a8-3714-41ca-9df0-da502a866705.png)

3. **Create Blog Page**: `/blogs/create`
![Create Blog Page](https://user-images.githubusercontent.com/145041345/278760364-1764b318-2092-4c8d-bb6a-b19f3d9d7d71.png)

4. **Single Blog Page with Delete Button**: `/blogs/:id`
![Single Blog Page](https://user-images.githubusercontent.com/145041345/278760412-d297658e-3b21-4d4e-a80e-6153e4aac957.png)

## Node.js Version
This project requires Node.js version 18.x or higher.

---

Happy coding!
