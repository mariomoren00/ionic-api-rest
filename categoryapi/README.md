# Blog API

Using nodejs with express and bookshelft to create a API REST

## Endpoints

Next we need to define our API end points - we need to be able to perform basic CRUD operations on the following resources: `categories`.

### Categories
 - `GET    /categories`   - fetch all categories
 - `POST   /category`     - create a new category
 - `GET    /category/:id` - fetch a single category
 - `PUT    /category/:id` - update category
 - `DELETE /category/:id` - delete category

### Tools
- Express
- Body parser
- Bookshelf
- Consign
- Dotenv
- Knex
- Lodash
- Mysql
- Babel
