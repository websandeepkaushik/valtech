## Assignment Direction

1. Create React Web application with basic CRUD operation with following
   templates and instruction. Utilize Redux, React Router etc.
   Choose any one, either from Featured Developers or Trending Projects

2. Home page - https://adobe.ly/2QKRnZ8
   Home page contains list of items in grid display as show in above
   link, each items having form data values display according to design.
   Initial data listing can be taken from API and render at Home page.

3. Form page - https://adobe.ly/2QH4aeK
   From Home page, on clicking Add New button, redirecting to Form
   page. After submitting the form, should appended in Home page with
   list of items.

4. Each item in home page should have option Edit/Delete on cursor hover
   particular item.

5. To edit any item, taken to form page then edit.

6. Use the below service API for Edit, Delete operation.
   http://localhost:3000/items
   a. For Edit, Delete operation – pass respective item id as parameter with
   API service call.

7. Use Supporting images, icons in Assets folder.

### Instructions/Guidelines

Instructions regarding service API

1. Install json-server
   npm i -g json-server

2. Run below command from your project root folder. You need to keep
   developers.json (developers.json has been provided with this document) file
   in the respective path.
   json-server --watch ./public/assets/developers.json

3. API will be accessible by the URL http://localhost:3000/items
