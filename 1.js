URL = 'https://hplussport.com/api/products'			

var request = new XMLHttpRequest();					// Create Request
request.open('GET', URL);							// Open Request 

request.onload = function() {						// Action once data received
	var response = request.response;				// Get Response
	console.log(typeof response);					// Check Type of Response --> String
	var jsonData = JSON.parse(response);			// Parse to JSON
	console.log(typeof jsonData);					// Check Type of Response --> Object
};

request.send();										// Send Request

var car = {											// Create Object car
	make: "Honda",									// String property 
	model: "City",
	year: 2014,										// Number property 
	honk: function() { 								// Function property
		alert("Beep beep"); 						// Alert command
	},
	driver: { 										// Object property
		name: "Allen", 
		license: "TN" 
	}
 };

 console.log(car.make);								// Log property make of object car
 console.log(car.driver.name);						// Log property name of object driver of object car