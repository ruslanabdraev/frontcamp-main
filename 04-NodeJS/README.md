## Node.js
### Part 1
Develop “news application” that provides basic functionality: add, get, edit, delete news using node.js and express framework.Part 1: 
1) Install NodeJS. Use npm to install express framework to your project folder.
2) Implement and run simple web-server which will always return JSON of fixed news entities (any route, any request).
3) Extend web-server functionality from #2. Use Rest API to implement CRUD operations endpoints for news articles. You can log on console all operations until part 2. Use postman, curl or any other tool to test your endpoints.Example of routes: 
    - GET /news
    - GET /news/{id}
    - POST /news
    - PUT /news/{id}
    - DELETE /news/{id}
4) Implement error handling middleware (http://expressjs.com/en/guide/error-handling.html) which will send an error   without stack trace to the client. Use any express view engine to wrap an error.

**Advanced:**
- All frameworks and libraries that used in project should be added to package.json.
- Application (node.js server) should launch with command “npm start”. 
- Add simple logging mechanism to write URL and Date info to file per each request (try https://github.com/winstonjs/winston or any other library).

### Part 2
1) Install and setup mongoose.
2) Create a mongoose scheme for news entity.
3) Replace "console logs"/stubs from part 1 to real communication with database.
    - Find all news
    - Find news by ID
    - Insert news
    - Update news record
    - Delete news from DB
4) Describe mongoose scheme for User model. Add registration/authorization functionality (passportjs) for accessing functionality edit/delete news.

**Advanced:**
- Add facebook authentication (passport.js).