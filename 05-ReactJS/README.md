## React
### Part 1
1) Create package.json file and install React, Redux, React-Redux, React-Router, Jest. Install and configure webpack & babel to get build artifact by running npm command.
2) Write components implementing HTML markup for required design (see images at the beginning of the document). For this part, no need to implement API calls and routing, the task can be done with mocked data.
3) Use <ErrorBoundary> component for catching and displaying errors https://reactjs.org/docs/error-boundaries.html. You could create one component and wrap all your application, or use several components.

### Part 2
1) Go through API docs in swagger: https://reactjs-cdp.herokuapp.com/api-docs
2) API Endpoint: https://reactjs-cdp.herokuapp.com/
3) Make your components perform real AJAX requests.
4) Move data fetches to actions and pass data to your components with redux.
5) Create routing for your application. Link app states between each other with React router. By default user lands on a new page with empty results state (caption 17). When user clicks on a film item, redirect him to:
    ```
    localhost/film/id
    ```
6) Handle invalid URLs, display create a 404 page, where user will be redirected in case of invalid URL. On switching search type or sorting type you shouldn’t switch any routes.
7) When user performs a new search, you should redirect him to:
    ```
    localhost/search/Search%20Query
    ```
8) When a new user lands on the page with such URL, you should perform search and display results.