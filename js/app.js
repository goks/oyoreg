// Initialize Firebase
const config = {
	apiKey: "AIzaSyDq-nKW8kwg9wOL1WHkepS4iFqTo0R4IsA",
	authDomain: "project-6616359000697576005.firebaseapp.com",
	databaseURL: "https://project-6616359000697576005.firebaseio.com",
	storageBucket: "",
};

firebase.initializeApp(config);
const database = firebase.database();
const form = document.querySelector('form');
const inputElements = document.querySelectorAll('input');
const formSection = document.querySelector('.form-container');
const waitSection = document.querySelector('.wait-section');
const succSection = document.querySelector('.succ-section');

form.addEventListener('submit', function (evt) {
	evt.preventDefault();
	var data = retrieveData();
	writeUserData(data);
	showWait();
});

function showWait () {
	formSection.style.display = "none";
	waitSection.style.display = "block";
}

function dataSaved (argument) {
	waitSection.style.display = "none";
	succSection.style.display = "block";

}


function writeUserData(data) {
  database.ref('/responses').push(data,dataSaved);
}

function retrieveData () {
	return {
    name: inputElements[0].value,
    name2: inputElements[1].value,
    email: inputElements[2].value,
    phone : inputElements[3].value,
    college : inputElements[4].value,
  };
}




