var ul=document.getElementById('item')
ul.addEventListener('click', removeItem);
function addData(event){
    event.preventDefault()
    var userName=document.getElementById('name').value;
    var userEmail=document.getElementById('email').value;
    var userPhone=document.getElementById('phone').value;
  
   
    var li = document.createElement('li');
    li.className = 'l_items';
    li.appendChild(document.createTextNode(userName+'--'+userEmail+'--'+userPhone));
   
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    editBtn.className='edit-btn';
    deleteBtn.className = 'li_btn';
    deleteBtn.appendChild(document.createTextNode('delete'));
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn)
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    

    let myObj ={
        name:userName,
        email:userEmail ,
        phone:userPhone   
    }
    let myObj_serialized=JSON.stringify(myObj);
    localStorage.setItem(myObj.email,myObj_serialized)
   

    // localStorage.setItem('Name',myObj.name)
    // localStorage.setItem('Email',myObj.email)
}

// Remove item
function removeItem(event){
    if(event.target.classList.contains('li_btn')){
      
        var li = event.target.parentElement;
        ul.removeChild(li);
        var userName=document.getElementById('name').value;
        var userEmail=document.getElementById('email').value;
        var userPhone=document.getElementById('phone').value;
        let myObj ={
            name:userName,
            email:userEmail ,
            phone:userPhone   
        }
        let myObj_serialized=JSON.stringify(myObj);
        localStorage.removeItem(myObj.email,myObj_serialized)
      
    }

  }