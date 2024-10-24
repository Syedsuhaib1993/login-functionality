function formsubmit(){
    var user = document.getElementById('username').value
    var pass = document.getElementById('password').value
    console.log(user,pass)
    if(pass.length<8){
        alert('Password should be atleast 8 character')
        return
    }
    if(!user || !pass){
        alert('Enter your Username and Password')
        return  
    }
    if (user === 'suhaib' && pass === 'suhaib123'){
        alert('login')
        window.location.href="./index.html"}
    else{
        alert('wrong input')
    }
    user = ""
}