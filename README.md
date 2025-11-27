# Weather App

Student: Alisha (Ellie) Adhikari  
Student ID: 101514070  

This is a React weather application created for COMP3123 Lab Test 2. The app lets the user enter a city name and retrieves weather data using the OpenWeatherMap API. It displays temperature, weather description, humidity and wind speed.

## API Used
OpenWeatherMap Current Weather API  
https://api.openweathermap.org/data/2.5/weather

Example format:
https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=API_KEY&units=metric

## How to run
1. Clone or download the project  
2. Inside the project folder run:

npm install
npm start


## Postman
API was tested in Postman using parameters:
- q (city)
- appid (API key)

## Notes
- node_modules is ignored  
- Screenshots of app and Postman results are attached in the submission document

## Screens / Output Description

- Screen 1: Initial page with the Weather App title and empty search box.
- Screen 2: Weather result for Ottawa, CA (shows icon, temperature, feels like, humidity, wind).
- Screen 3: Weather result for New York, US with updated values.
- Screen 4: Postman request showing query params (q and appid) for Toronto.
- Screen 5: Postman JSON response from OpenWeatherMap for Toronto.

The actual screenshots are included in the submitted PDF/DOCX document.

