# Database

- Willy, Hasan

- PORT 3306? check:
  `sudo lsof -i -P -n | grep LISTEN` - find mysql

- According to the image

- name of the columns kebabCase

- data in database - all lowercase, no capital first letter

- test the queries for the backend

- export the database and push it on GH (database folder?)

# Backend

- Bel, later Willy (after finishing database)

- [x] PORT 3500 

- install mysql

- create route flights

- [x] allow cors

- [x]
2. router for request for cities (for select) - return all city names from city table

   ```
   select cityNames from city
   ```
 [x]
3. router for request for companies (for checkboxes) - return all companies names from company table

```
   select companyNames from companies
```

4. router for request for flights (for results) - return all contain of the flight table

   search will be done in 2 steps:

   - use departure from Frontend as start and arrival as destination
   - opposite direction

```
select cityNames, cityCode companyName, companyLogo,.... from flights natural join city natural join company where start=? and destination=?
```

5. later added filters - stops, price and companies (on thursday) - not in backend

# Frontend

- David, Alice

- PORT 3000

- data from inputs to lowercase - not necessary, predefined values will be in lower case

- using React Hooks & Context

- Bootstrap for styling

- components:

  1. Form - for the data about flight search (departure/destination selects, date from/to inputs, search button), can be in header

  2. Results - section for displaying results (container) - contain cards for different flights option

     - cards - like Fahim's mock-up

     - some container for card?

  3. right sidebar - for displaying of the actions, one action = one card
  4. left sidebar - for the filtering form (how many stops - checkboxes, price - inputs, companies - checkboxes)

  5. main - html wrapping element for the results and sidebars to make layout

- app state :

  1. array for results
  2. object for filter options
  3. object with the inputs from search form
