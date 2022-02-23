// function login(){
//     let start = {
//       email:document.getElementById("email").value,
//       password:document.getElementById("password").value
//     }
//     let stor1 = localStorage.setItem("email","anusahmed242@gmai.com");
//     let stor2 = localStorage.setItem("password","567890")
//     let stor3 = localStorage.setItem("email","daniyalaq111@gmail.com");
//     let stor4 = localStorage.setItem("password","dani")
//     JSON.stringify(stor1,stor2);
//     JSON.stringify(stor3,stor4);

// }


// log in foam code 


function login() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  


  let email1 = localStorage.getItem("email1");
  let pass1 = localStorage.getItem("pass1");


  if (email== email1 && password == pass1 ) {
     window.location.href = "member.html";
    
  }
  else{
    alert("email and password is incorrect")
  }
  
}








// sign up foam code 


function signup() {



  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;





  localStorage.setItem("username " , name);
  localStorage.setItem("email1 " , email);
  localStorage.setItem("pass1 " , password);



}



// pop up page functionality


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}





var list = document.getElementById("list")



function create() {
  var todo_item = document.getElementById("todo-item");
  
  // create li tag with text node
  
  var li = document.createElement("div")
  var litext = document.createTextNode(todo_item.value);
  li.appendChild(litext);

  // create delete button
  var delbtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delbtn.setAttribute("class","delete")
  delbtn.setAttribute("onclick" ,"del(this) ")
  delbtn.appendChild(delText);

  // create edit button 
  var editbtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editbtn.appendChild(editText);
  editbtn.setAttribute("class","edit");

  editbtn.setAttribute("onclick","editItem(this)")



  li.appendChild(delbtn);
  li.appendChild(editbtn)  

  list.appendChild(li);


  todo_item.value = " ";

   console.log(li); 
}



// Function of dlt btn

function del(d) {

  d.parentNode.remove()
}



// FUNTION OF DLT ALL BUTTON


function dltall() {
  list.innerHTML = " "
  
}

// edit function

function editItem(d) {
 
//  var val = d.parentNode.firstChild.nodeValue;
 
  var val = prompt("enter edit value",d.parentNode.firstChild.nodeValue);
  d.parentNode.firstChild.nodeValue = val; 
   
  
  // console.log(d);
  
}



// var arr = new Array();

//  function keyval(key,val)
//      {
//         this.key = key;
//         this.val = val;
//      }



  



















