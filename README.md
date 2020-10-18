# Eat Da Burger

## Description

This is a demonstration app I have made using JavaScript, SQL, HTML, and CSS. The app was made with the express, express-handlebars, and mysql npm packages, and follows an MVC format. On the front-end the application also uses Bootstrap and jQuery. 

 The app allows the user to enter a burger name, the burger shows up on the left with the name and a 'Devour it!' button that one can press. When the button is pressed, the burger moves to a different olumn showing it has been "Devoured". 

While this app seems simple, all of the manipulation of data is done on the backend through mySQL and node. The app is deployed and usable on Heroku. The Heroku version is using JawsDB to save and retrieve data. 

I also added a delete function. No button is associated with the delete function, but it can be accessed with postman and I put it in to get some practice, and so I have a reference if I ever need code for deletion in the future. 

## Bugs

While the project works just fine, there is one issue I would like some help with. 

If you go into the app.js file located within public/assets/js, you might notice that the ajax request has a location.reload() function within it's failure parameter. I did this because I noticed whenever I made the ajax call, I would get a 404 error in the browswer console and the page would not reload using res.redirect('/'). At first I thought it wasn't working, but when I came back to it later, I noticed the items were in fact being removed from the database and no longer showing on the page when I manually refreshed. 

So while I was getting a 404 error, the request was processing and the items were being deleted. One I added location.reload() to the fail condition, I got it to reload with the updated data, but it's still bothering me. I googled for over an hour and couldn't find a good answer, so if whoever is grading this knows why this is happening, I would greatly appreciate it if you could let me know. 

## Links 

Deployed App: https://obscure-castle-54430.herokuapp.com/  
GitHub Repository: https://github.com/jjbidwell/burger  




