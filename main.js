function addData(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    localStorage.setItem('Name',name)
    localStorage.setItem('Email',email)


}