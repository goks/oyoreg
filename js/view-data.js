// Initialize Firebase
const config = {
	apiKey: "AIzaSyDq-nKW8kwg9wOL1WHkepS4iFqTo0R4IsA",
	authDomain: "project-6616359000697576005.firebaseapp.com",
	databaseURL: "https://project-6616359000697576005.firebaseio.com",
	storageBucket: "",
};

firebase.initializeApp(config);
const database = firebase.database();
const template = document.querySelector('#template');
const insertPoint = document.querySelector('tbody');

function appendToBody (obj) {
 var cellArray = template.content.querySelectorAll("td");
 cellArray[0].textContent = obj.name;
 cellArray[1].textContent = obj.email;
 cellArray[2].textContent = obj.phone;
 cellArray[3].textContent = obj.college;

 var clone = document.importNode(template.content, true);
 insertPoint.appendChild(clone);
}





database.ref('/responses').once('value', function (snapShot) {
	snapShot.forEach( function(element, index) {
		appendToBody(element.val()); 			
		console.log(element.val()); 			
	});
});
