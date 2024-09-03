
function submitForm() {
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var name = firstName + " " + lastName;
  if(firstName == "" || email === "" || lastName === "" || message === "" || phone === "")
  {
    alert("please fill the full form!")
  }
  else
  {
    sendEmail(name,email,phone,message);
    if(sendEmail)
      document.getElementById("contact-form").reset(); 
  }
}

function sendEmail(name,mail,ph,msg){
  debugger
  Email.send({
    // Host: "smtp.secureserver.net",
    Host: "smtp.gmail.com",
    Username: "**********@gmail.com",
    Password: "******",
    To: "*****@gmail.com",
    From: "*******@gmail.com",
    Subject: "Enquiry mail from "+ name+"",
    Body: "Name: "+ name +" <br /> <br /> Email: "+mail+" <br />  <br /> Phone: "+ph+" <br />  <br /> Message: "+msg+" ",
  }).then(
    window.alert("Mail sent successfully")
  );
  return;
}
