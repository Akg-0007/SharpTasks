function submitForm(event) {
    event.preventDefault()
     localStorage.setItem( "Username",event.target.username.value);
     localStorage.setItem( "Email",event.target.email.value);
     localStorage.setItem( "Phone Number",event.target.phone.value);
  
  // var UserDetails={
  //   "Username":event.target.username.value,
  //     "Email":event.target.email.value,
  //   "Phone Number":event.target.phone.value,
  
  // };
  //   localStorage.setItem("UserDetails",JSON.stringify(UserDetails));
    }
  
  module.exports=submitForm;