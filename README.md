# startup
printf("Hello World")
-h rrr -h
int a = 123;
I found it very interested using Github to write code.
![This is an image](/Startup%20Strach.png)
*/ You can find different types of Food in Provo, Asian, European, American, and South Americans. A website with these inforamtion can help people to decide what they want to eat and where to go on a date./*

Key features:
    Secure login over Https
    Communicate within the Chat
    Notifications when new comments are made
    Able to navigate main, profile, messages
    Comments and saved stores will be stored
    able to comment and save stores
    
   The first Simon went well. I was able to use different html code and recreate a Simon. However, I was having issues when I tried to sync my push with Github. It fraustrated me but I am glad it finally worked out.

I decided to change my start up application to a webiste for meme, where people can share their favourite memes and others can common it.

This CSS and HTML start up is hard for me. I spent couple hours to final have something coded. I can tell that I have learned a lot during this assignment. But I also see that there are concepts that I don't understand well. I took another hour to try and figure how to create a vertical list and a horizontal list.

DOM accessing all element:
	function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);


DOM - insert, modify, or delete

Create a new element:
	create the element on the DOM document
	const newChild = document.createElement('div');
  newChild.textContent = text;
insert the new element into the DOM tree by appending it to an existing element in the tree.
const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
Removing - removeChild
function deleteChild(parentSelector) {
  const el = document.querySelector(parentSelector);
  el.parentElement.removeChild(el);
}

deleteChild('#courses div’);
Injecting HTML
Find the first element in te DOM and replace it
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>'
Event Listeners

const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
Clipboard	Cut, copied, pasted
Focus	An element gets focus
Keyboard	Keys are pressed
Mouse	Click events
Text selection	When text is selected




This time I created javascript files for my startup. I learned simple function and high-order functions on Javascript. I tried to make the table and the delete buttons on each row. The problems was on the for loop and I finally firgured to put it on my click_press function to have addeventlistener to all my delete_button. All of all, I am satisified on applying waht I have learned.


In Simon Service, I reinforce my knowledge on how to set up service using node.js. I also learned how to use express to work with my service. I do still need more time to understand and figure how to use node.js and express to build the back-end for my Start-up application


In simon database, I learned how to set up database and code that will help set up the mongo database. I realise that database is really useful and looking foward to exploring more its functions

const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const scoreCollection = client.db('simon').collection('score');

function addScore(score) {
  scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = {score: {$gt: 0}};
  const options = {
    sort: {score: -1},
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {addScore, getHighScores};


THis time I looked at the code of login. It was amazing to see that we can use database to create a login credential authorisation test. From reading the code, I understand more about connecting to myy db and creating connection. I am looking forward to put login function in my start application

This time I learned about web-socket. Websock is such an interesting function to build. It helps to cuild an instant communcation application on my start up and Simon. I learned how to update from http to ws, and also the code to broadcast the message when needed and how to react when receive the message.

This time I completed my start-up and was able to connect my mongodb and websocket to my application. It is now listening on port 4000 and is ready to connect the server and looking to save new urls. I would want to upgrade it so it will show all the urls's gif on the explore page.

This time I worked on my react Simon. React is completely new. It app.jsx combinde all the componenets in one page. I also figured out how to debug the react. IT is the most important thing I learn this time. I also learned route. I am going to watch Professor's video 

