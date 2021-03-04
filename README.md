# Gifter API

This is the backend for the gifter app

## GA-SEI-Project-3

#### Developed By: Keenan Ward

## Welcome

Welcome to the **Gifter API**, which is the API serving requests from the **Gifter** web-app.

## About

The **DnDCC_API** server runs on `Express`, with connections to `MongoDB` via `Mongoose`. You can view the **Gifter API** [HERE](https://gifter-backend-api.herokuapp.com/)!

## Deployment

**DnDCC_API** was deployed via [Heroku](https://www.heroku.com/), which communicates with a MongoDB database on Atlas.

## Development

The backend was built to allow for data to be entered as a Gift or as a Gift Suggestion. There is also an Attributes model which populated the homepage with the attributes in the database. The server side of the app is complete with a homepage built in basic HTML and CSS which directs the user to endpoints if they wish to see the raw JSON data.

The Gift and Suggestion models use an Enum keyword in order to keep the attributes strictly associated with those in the database.
