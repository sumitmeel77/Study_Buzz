# About Study Buzz

Study Buzz is a web app for to host and join study groups. 

A **Full-Stack Web Apllication** consisting of a Single Page Web Application built with **Javascript and React.js**. Which interfaces a **REST APi** built with **Node.js, Express, and MongoDB** (Mongoose).


### About

In the application, you create accounts in which when you login, you're prompted to create a profile. In the profile you can list a bio, year, and the courses you're enrolled in (all very well validated). Then you can browse other users, and send friend requests. Your dashboard will display requests sent to you, and your friends, with various options, like seeing their profiles. You can create study groups, private or public (private groups have to let requesting members in, public groups allow auto-joining), and based on groups. You can also join other groups. Groups have a chat. You can also invite other members to groups, especially your friends.

### Technical Buzzwords

* Front-end built with React.js.
* Functional Components * Hooks
* Global State Management handled using Context APi and it's related hooks such as useReducer 
* REST APi built with Node.js, Express, and MongoDB (Mongoose). Tested using Postman. APi Includes Request Validation, 40+ endpoints, JSON req/res interface.
* User Authentication system built with JWT, with custom express middleware for private routes and user identification, and JWT-localStorage handling on the client for user sessions
* Passwords hashed in the database using BCryptJS, with JWT Secret not pushed to repository.
