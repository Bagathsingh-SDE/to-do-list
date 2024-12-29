 const inputBox = document.getElementById("input-box")
 const listContainer = document.getElementById(" List-container")
 function addTask(){
     if(inputBox.value ===''){
        alert("need to write some thing");
     }
     else {
      //  create a element and store in the variable called li
        let li = document.createElement("li"); 
      //    This operation does not display the item on the webpage yet; it simply prepares the content of the li element.
      // add the input in the li tag  
      li.innerHTML = inputBox.value;
      //   this below line get the id from and append to the listcontainer
        listContainer.appendChild(li);

        let span = document.createElement("span");
      //   <ul id="listContainer">
   //  <li id="item1">input typed <span>×</span></li>
   //  </ul>
        span.innerHTML ="\u00d7";
        li.appendChild(span);
     }  
     inputBox.value = "";
     saveData()

 }

 listContainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData()
   }
   else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData()
   }

 }, false);


function saveData(){
   localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
   listContainer.innerHTML = localStorage.getItem("data");
}

showTask();