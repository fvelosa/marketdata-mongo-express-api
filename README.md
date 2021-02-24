# Description

Simple implementation of a market data REST API using node/express, OPEN API and mongoDB.

# Quick start

Make sure you have docker and docker-compose installed and running.

1. Run the command `docker-compose up -d` to start the containers with mongodb, mongo-express and the baackend.
2. Go to [http://localhost:3000/api-docs/](http://localhost:3000/api-docs) to view the **swagger-ui** documentation
3. Use the api `http://localhost:3000/market-data` is available for the folloing collections:
   1. [yields](http://localhost:3000/market-data/yields)
   2. [swaptionvolmtxs](http://localhost:3000/market-data/swaptionvolmtxs)

# Description

The following technologies are used in this project:

* docker to run the backend, mongodb and mongo-express admin interface
* docker-compose to locally deploy the full stack
* backend using node and express written in typescript

# OPEN API 3.0

The api definition uses the Open API 3.0 standard.

The models are automatically generated from the swagger definition file. To update the models run:

`npm run swagger:codegen`

or 

`npm run swagger:codegen: watch` to update the models when the file changes

# Assumptions and decisions

* Existing data is deleted and new data contained in the `src/data` folder is loaded into the mongoDB 'market-data` database.

* The **yields** are tuples of (days, yield) fields. The transformation from the CSV file flat format to the OpenAPI json-schema model could be done in several forms, namely:
  1. Root fields like the csv file with the swagger model allowing aditional properties. This option would be harder for the consumer of the API.
  2. Two arrays, one with maturity days and another with maturity yields
  3. **Selected option**: An array of objects with fields **maturity** and **yield**.

* **Yield**: Because javascript does not have precision when dealing with decimal numbers the yield field was set as string in order to allow the consumer of the data to use Math library like **decimal.js** or **big.js**.

* The **volatilities** follow the same principle asa the yields, the 3rd option was implemented.

# Backend

The scafolding of the backend was done with express-generator-typescript and uses node, express, morgan and the mongodb driver.

For **environment variables** please look at the `docker-compose.yml` file.

# Mongo

Mongo is a standard mongo docker image.

# Mongo Express

The docker compose also runs a container with the mongo-express interface.

To access the admin interface go to [http://localhost:8081](http://localhost:8081/)

# Docker

Make sure you have docker installed and running.

```sh
docker-compose up -d
```

# Bugs and limitations

* Doesn't implement unit, integration and end to end testing
* The REST API responses need to be refined, for productivity the project uses a standard httpError response model for all endpoints.
* Error handling is extremelly limited
* The API calls are not validated with a Swagger middleware like `swagger-express`
* The API does not implement pagination, filtering, grouping or sorting