function addData(){
    var userName=document.getElementById('name').value;
    var userEmail=document.getElementById('email').value;
    // localStorage.setItem('Name',userName)
    // localStorage.setItem('Email',userEmail)
    let myObj ={
        name:userName,
        email:userEmail    
    }
    let myObj_serialized=JSON.stringify(myObj);
    localStorage.setItem('myObj',myObj_serialized)

    // localStorage.setItem('Name',myObj.name)
    // localStorage.setItem('Email',myObj.email)
}

