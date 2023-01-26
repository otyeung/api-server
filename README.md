# API Server

A simple server built using the Express.js framework and the json-server library. It serves data from a JSON file, "db.json", using the json-server library's router. The server also uses the helmet library to add HTTP headers for security. You can make it up and running in a few minutes!

# Use Case

When you are making [LinkedIn Marketing API](https://learn.microsoft.com/en-us/linkedin/marketing/?view=li-lms-2023-01) calls in your apps or implementing your automation workflow, sometimes you will receive field values in one format and you need a middleware to transform field values by simple table lookup.

For example, LinkedIn returns a lead whose industry field value is **"Technology, Information and Internet"**, however the client is using a different definition **"Technology and Services"**, so you'll need to perform field value transformation.

Another example is when LinkedIn returns the country code **"us"**, you may want to substitute the full country name **"United States"** by a table lookup.

Creating a full-blown backend infrastructure with database functionality is surely overkill, because on this use case you only need to do HTTP GET requests with very simply query, you don't need HTTP POST, PUT, PATCH, DELETE, OPTIONS, and no table join!

That's why this apps is created as a boilerplate.

# Tech Stack

- [express](https://www.npmjs.com/package/express) - highly popular fast web framework and middleware to make the app highly scalable with asynchronous APIs
- [helmet](https://www.npmjs.com/package/helmet) - secure the Express apps by adding necessary HTTP headers, it's not a silver bullet but it can help!
- [nodemon](https://www.npmjs.com/package/nodemon) - automatically restart the node application when file changes in the directory is detected, it means hot-loading (for development by running `npm run dev`)
- [json-server](https://www.npmjs.com/package/json-server) - get a full REST API backend by reading data from local json file "db.json"

# Installation

1. Clone this repo
2. Run `npm install`
3. Modify db.json file according to your own data requirements
4. Run `npm start`, it will start the server locally at port 3000
5. Verify the endpoint by opening a browser at http://localhost:3000

# Sample Data Set

The sample data set in "db.json" comes with data objects, "country" and "industry" :

```json
{
  "country": [
    {
      "code": "ad",
      "description": "Andorra"
    }
    ...
  ],
  "industry": [
    {
      "id": 2190,
      "oldLabel": "Accommodation Services",
      "hierarchy": "Accommodation Services",
      "description": "This industry includes entities that provide short-term lodging in facilities, such as hotels, motels, and bed-and-breakfast inns. In addition to lodging, they may provide a range of other services to their guests.",
      "newLabel": "Accommodation Services"
    },
    ....
}
```

You may access each object by these 2 routes :
`http://localhost:3000/country`
`http://localhost:3000/industry`

The original data source is coming from LinkedIn :

- [LinkedIn Country Code](https://learn.microsoft.com/en-us/linkedin/shared/references/reference-tables/country-codes)
- [LinkedIn Industry Code V2](https://learn.microsoft.com/en-us/linkedin/shared/references/reference-tables/industry-codes-v2)

You may execute query in your API call, for example

- `http://localhost:3000/country?code=us`
- `http://localhost:3000/industry?oldLabel=Accommodation%20Services`

Feel free to **bring your own data** by modify the db.json and save the file, the apps will restart automatically!

# Deploy the apps to the cloud

[Cyclic](https://www.cyclic.sh/) is my favorite PaaS platform for a couple of reasons:

1. Generous free tier (3 apps, and 100,000 API calls per month), it's good enough for POC and small production application
2. The apps never sleep and support HTTPS
3. Support Javascript, Typescript and Python

## Simple Steps

1. Sign up a Cyclic account with your github account
2. Clone this repo, modify the db.json file as required
3. Push this repo to your own github account, it has to be public repo
4. Deploy it to Cyclic

This is the [demo site](https://difficult-wasp-tweed-jacket.cyclic.app), and you can test using the following API calls:

- `https://difficult-wasp-tweed-jacket.cyclic.app/country?code=us`
- `https://difficult-wasp-tweed-jacket.cyclic.app/industry?oldLabel=Accommodation%20Services`
