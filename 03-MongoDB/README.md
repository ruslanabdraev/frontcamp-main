## MongoDB 
### Part 1
#### Precondition
1) Install MongoDB. Follow installation guidelines for your OS at https://docs.mongodb.com/manual/installation/#mongodb-community-edition
2) Import Restaurants Collection. Follow these steps to import restaurants collection to you local data base:
    - Save restaurants.json on your PC
    - Run local instance of MongoDB
        - Assuming you want to use default data directory and port for the instance run mongod without any parameters mongod
    - Use mongoimport (it’s in MongoDB installation folder) to import the collection to the database
        - Assuming you run local MongoDB on the default port the following command should create “restaurants” collection in “frontcamp” database
        ```
        mongoimport --db frontcamp --collection restaurants --file <path to restaurants.json>
        ```
    - Verify that collection was correctly imported
        - Assuming local MongoDB instance uses the default port, run mongo without any parameters 
        ```
        mongo
        ```
    - Switch to frontcamp database
        ```
        use frontcamp
        ```
    - Verify that the number of the documents in the restaurants collection is 25359
        ```
        db.restaurants.count()
        ```

#### Querying Restaurants Collection
1) How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?
2) What is the _id of the restaurant which has the grade with the highest ever score?
3) Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan” (borough).
4) What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names without _id.
5) What are _id and borough of “Seafood” (cuisine) restaurants which received at least one “B” grade in period from 2014-02-01 to 2014-03-01? Use projection to include only _id and borough.

#### Indexing Restaurants Collection
1) Create an index which will be used by this query and provide proof (from explain() or Compass UI) that the index is indeed used by the winning plan:
    ```
    db.restaurants.find({ name: "Glorious Food" })
    ```
2) Drop index from task 1 current topic
3) Create an index to make this query covered and provide proof (from explain() or Compass UI) that it is indeed covered:
db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 })
4) Create a partial index on cuisine field which will be used only when filtering on borough equal to “Staten Island”:
    ```
    db.restaurants.find({ borough: "Staten Island", cuisine: "American" }) – uses index
    db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }) – does not use index
    db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }) – does not use index
    ```
5) Create an index to make query from task 4 previous topic (Querying Restaurants Collection) covered and provide proof (from explain() or Compass UI) that it is indeed covered

### Part 2
#### Precondition
Import Airline Collection. Follow these steps to import airlines collection to your local data base:
    - Save airlines.csv on your PC
    - Run local instance of MongoDB
    - Use mongoimport to import the collection to the database
        ```
        mongoimport.exe -d frontcamp -c airlines --type csv --headerline --file <path to airlines.csv>
        ```
    - Verify that the number of the documents in the airlines collection is 186648

#### Aggregating Airlines Collection
1) How many records does each airline class have? Use $project to show result as `{ class: "Z", total: 999 }`
2) What are the top 3 destination cities outside of the United States (destCountry field, not included) with the highest average passengers count? Show result as `{ "avgPassengers" : 2312.380, "city" : "Minsk, Belarus" }`
3) Which carriers provide flights to Latvia (destCountry)? Show result as one document `{ "_id" : "Latvia", "carriers" : [ "carrier1", " carrier2", …] }`
4) What are the carriers which flue the most number of passengers from the United State to either Greece, Italy or Spain? Find top 10 carriers, but provide the last 7 carriers (do not include the first 3). Show result as `{ "_id" : "<carrier>", "total" : 999}`
5) Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry). Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc). Show result as `{ "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } }`