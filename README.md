# lettfaktura-sow
SOW for Lettfaktura\
You can access the website in: http://204.168.158.228/

## Routes frontend
`/login` --> Login page\
`/pricelist` --> Pricelist page

**Credentials for testing:**\
User: admin\
Password: password

## Routes backend
All routes coming from backend are prefixed with `api`\

### Auth Routes
`/auth/login` (POST) --> Logs in a user if credentials are correct\
`/auth/logout` (POST, PROTECTED) --> Logs out a user and sets the token the user is using as blacklisted

### Pricelist Routes
`/pricelist` (GET, PROTECTED) --> Fetches all the pricelist\
`/pricelist` (POST, PROTECTED) --> Adds a pricelist row\
`/pricelist/:id` (DELETE, PROTECTED) --> Deletes a pricelist given its id\

**If you want to add a pricelist using postman or any other api handler**
- Log in into the website
- Once you are in the pricelist page, there should be a token within your Local Storage
- Use that token to authenticate yourself when calling the api

Example\
<img width="825" height="304" alt="image" src="https://github.com/user-attachments/assets/47829b0a-2ad6-404d-898d-ce41835eb307" />
<img width="638" height="217" alt="image" src="https://github.com/user-attachments/assets/c85d76aa-4a98-4861-921d-c2ea697e766a" />
- The value of the JWT is longer than the one in the image

### Translate
`/translate/:lang` (GET) --> Fetches translation data based on given language code (lang)

### Misc
`/health` (GET) --> Returns a simple ok status to check for api availability

## React Dependencies
- @uidotdev/usehooks: ^2.4.1,
- axios: ^1.13.6,
- i18next:  ^25.8.14 ,
- lucide-react:  ^0.577.0 ,
- react:  ^19.2.0 ,
- react-dom:  ^19.2.0 ,
- react-i18next:  ^16.5.6 ,
- react-icons:  ^5.6.0 ,
- react-router:  ^7.13.1 

## Node.js Dependencies
- cors: ^2.8.6,
- dotenv: ^17.3.1,
- express: ^5.2.1,
- jsonwebtoken: ^9.0.3,
- pg: ^8.20.0,
- pg-hstore: ^2.3.4,
- sequelize: ^6.37.8
