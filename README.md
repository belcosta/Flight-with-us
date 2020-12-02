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

- PORT 3500

- create route flights

1. allow cors

2. router for request for cities (for select) - return all city names from city table

   ```
   select cityNames from city
   ```

3. router for request for flights (for results) - return all contain of the flight table

   search will be done in 2 steps:

   - use departure from Frontend as start and arrival as destination
   - opposite direction

```
select cityNames, cityCode companyName, companyLogo,.... from flights natural join city natural join company where start=? and destination=?
```

4. later added filters - stops, price and companies (on thursday)

# Frontend

- PORT 3000

- data from inputs to lowercase
