# Fly with us

## Description

Group fullstack flight search project created during database module of our one year full-stack course. Uses mySQL as a database, Express.js for backend and React.js for frontend.

**Authors:** Alice Rez (Frontend-lead), Isabel Costa (Backend-lead), Willoid (Database-lead)

**Technologies used:** mySQL, Express.js, React.js, React Transition group, React Hooks, React Context, Create React App, Bootstrap + ReactStrap, CSS, CSS Variables, HTML, SVG

**Packages used:** mySQL for Express, async, Axios, cors, nodemon

**Implemented Features:**

- dynamic adding cities/companies list from database to React

- city selected for departure can not be selected for destination

- database contains 3 different tables (one for flights, one for companies and one for cities) - for the search of flights, joining of the tables is used

- cors package is used in backend to manage from where can be sent request to backend

- connections shown for way to the destination and back separately

- right sidebar showing special offers as an automatic carousel

- left sidebar allows to filter results by price, company (and number of stops?)

- if no connection is found, warning massage will be shown

## Setup

1. Clone repository and go to new created directory

**Database:**

2. If you use mySQL Shell, import database using:

   ```
   sudo mysql –u root –p dbName < <path>/flight_search.sql
   ```

   If you use XAMPP or other tools, use the way of importing database from their documentation

3. Check in terminal on which port your mySQL/XAMPP/other tool operates using this command:

   ```
    sudo lsof -i -P -n | grep LISTEN
   ```

4. If the port number is different than 3306, change `dbPort` in `backend/config.js` on value of your port:

   ```
    module.exports.dbPort = "<your-mySQL-port-nr>";
   ```

**Backend:**

5. Change directory to `backend` and start server by:

   ```
    nodemon start
   ```

**Frontend:**

6. In directory `frontend`, start client side using:

   ```
    npm start
   ```

7. If your client runs at different port than default port number 3000, change `frontendPort` in `backend/config.js` on value of your port:

   ```
    module.exports.frontendPort = "<your-frontend-port-nr>";
   ```

8. Enjoy!

## Acknowledgement

Frontend of this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
