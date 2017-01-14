//getting all our variables from the dom
var handleSubmitClick = document.querySelector('.input_button');

var form = document.querySelector('.email_form');
var fileSelect = document.querySelector('.input');

var uploadButton = document.querySelector('.input_button');

handleSubmitClick.addEventListener('click', submitHandler);



function submitHandler(e) {

	//preventing submit from redirecting
	e.preventDefault();

	//creating a new form data
	var formData = new FormData();

  formData.append('userEmail', fileSelect.value);

	//creating new xml request
	var xhr = new XMLHttpRequest();

	//opening it and telling it where to send it to
  //PUT ROUTE HERE!!!!!!!
	xhr.open('POST', 'PUT ROUTE HERE');

	//when we xml request...
	xhr.onload = function() {
		form.onsubmit = submitHandler;
	}
  //send data
	xhr.send(formData);


	form.onsubmit = function() {};
  fileSelect.value = '';
}

form.onsubmit = submitHandler;
