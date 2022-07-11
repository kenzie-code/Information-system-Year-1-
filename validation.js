function validateForm(){
	var fname=document.forms["messageForm"]["firstname"].value;
	var lname=document.forms["messageForm"]["lastname"].value;
	var Address=document.forms["messageForm"]["Address"].value;
	var Email=document.forms["messageForm"]["Email"].value;
	var Phonenumber=document.forms["messageForm"]["Phone Number"].value;
	
	
	if(fname==""|| lname=="" ||Address==""|| Email==""|| Phonenumber==""){
		alert("Empty fields found.Please fill the form.");
	}
	else{
			alert("Thank you for the feedback.");
	
	}
}
