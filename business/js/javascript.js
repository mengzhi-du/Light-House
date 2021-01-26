  function scroll() {
        var t = window.scrollY;
        var para = document.getElementById("para");
        var m = -0.25;
        var b = 0;
                
        newY = m*t + b;
        para.style.backgroundPositionY = newY + "px";
    }         


  function scroll() {
  
    var t=window.scrollY;

      var light = document.getElementById("light");     
    if (t > 2000) {
        light.style.transform = "scale(2, 2)";
    }


}

          
function validate(form) {
    var re = /\S+@\S+\.\S+/;
    
    if((re.test(String(form.email.value)))==false) {
        alert("Email incorrect!");
        form.email.style.borderColor = "red";
        form.email.focus();
        return false;
    } else if ((form.password.value).length < 8) {
               alert("Password incorrect!");
        form.password.style.borderColor = "red";
        form.password.focus();
        return false;
    } else if (form.password.value !== form.confirm_password.value) {
                alert("Confirm_Password incorrect!");
        form.confirm_password.style.borderColor = "red";
        form.confirm_password.focus();
        return false;     
    } else {
        form.email.style.borderColor="green";

        form.password.style.borderColor="green";

        form.confirm_password.style.borderColor="green";
        return true;
    }

}  
      
      
       