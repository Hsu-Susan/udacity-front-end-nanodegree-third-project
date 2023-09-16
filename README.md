# Weather Journal App Project :sunny:

Third project of Udacity's Frontend Developer Nanodegree 

## Overview
From the course: "This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI."

For this project I used the [OpenWeatherMap API](https://openweathermap.org/api) to get current weather info based on the user's zip code. 
And the user can input US only zip code and their feelings about today which will generate a most recent journal entry. 
That entry will include the current date, temperature at the location of they entered and the text of their feelings that the user inputted. 

## Preview

![Homepage screenshot](website/img/weather-app.png)

## Instructions

To run the app locally, you need to install Node.js if you didn't install yet.
It is using the following packages:
- Express
- Cors
- Body-parser

You can install these packages from the terminal by running the following command by replacing `[package name]` with the name of the package. 
```
npm install [package name]
```

Once everything is installed, you can run the app with this command.
```
node server.js
```
This should start a local server.Please navigate to `localhost:8080` in your web browser and congratulations, you're all set! 


## Credits:
- Weather icon [flaticon](https://www.flaticon.com/free-icon/sky_5497372)
- Background by [Pixabay](https://www.pexels.com/photo/city-skyline-new-york-skyscrapers-37646/)