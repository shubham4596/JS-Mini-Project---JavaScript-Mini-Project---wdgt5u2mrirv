function validate(){
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    if(username=="shubham" && password=="123456"){
        alert("you have successfull login");
        return false
    }
    else{
        alert("please enter valid credentials");
    }
}
