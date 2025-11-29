# Product Page Repo

This is a fully responsive product page built for a polaroid camera with React + Vite for a online interview assesment for QCAC.
The page features:
- A hero section showcasing the title, description and picture of the product
- A features section containing cards showcasing the camera's features
- A customer review section, showing preset custiomer reviews
- A form to add new reviews containing an interactive star display to rate the product and saving the reviews into local storage

## Prerequisites
Before running this project make sure you have these installed:
1. **Node.js**
2. **npm**

## Installation
To install this project:
1. Clone this repo through github
3. run "npm install" 
4. Run "npm run dev" to access the development server

## Technologies Used
React + Vite
React Icons
Jsx Inline Styles
JavaScript
Json Files
Node.js + npm

## Challenges 
One of the biggest challenges was making the interactive star rating. The idea was to make a rating meter that would update live when the user hovered over the stars and permenantly show the users choice when clicked. Each star needed to be able to show a empty, half, or full star tp fully display all the possible ratings. To achive this I went with the idea to split every star into a left side and a irght side using two boxes. This means that when the user hovers the left side it would be a half star and when the right side was hovered it would be a full star. Once the hover or selection was determined each star would render based off of its index.

Another challenge was rendering the pre-loaded JSON review data and the user added review data. When I first built the features section, I loaded the JSON data directly inside the features component making it static. After I started to implement the reviews from local storage I realized it was better to combine the JSON data with the local storage data at a higher level before I passed the combined data down as props to the component. This changed allowed the code to be cleaner and the features section to be fully reactive.
