//Failed js with saving text to local storage, not connected

const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');

function appendComment (event) {

    const data = {
      comment: commentInput.value,
      author: "Kendall Arceo"
    };
  
    event.preventDefault();
    // If the value is nothing just return
    if (commentInput.value.length < 1) return;
  
   
    
    // Reset textrea value
    commentInput.value = "";
  
    // Save the list to localStorage
    localStorage.setItem('comment-input', commentInput.innerHTML);
}

document.querySelector('.comment-input');.value = getSavedValue("");   // set the value to this input
        /* Here you can add more inputs to set value. if it's saved */

        //Save the value function - save it to localStorage as (ID, VALUE)
        function saveValue(e){
            var id = e.id;  // get the sender's id to save it . 
            var val = e.value; // get the value. 
            localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
        }

        //get the saved value function - return the value of "v" from localStorage. 
        function getSavedValue  (v){
            if (!localStorage.getItem(v)) {
                return "";// You can change this to your defualt value. 
            }
            return localStorage.getItem(v);
        }

if (localStorage["user"])
{
    var user = localStorage["user"] ;
    document.getElementById("user").value = user ;
    alert("you are already a user")
}
else
{
    document.getElementById("user").placeholder = "your gmail address" ;
    console.log("user no found in localStorage")
}

submit.addEventListener('click', function(){
    event.preventDefault();
    var user = document.querySelector("user").value ;
        //localStorage["user"] = user ;
    localStorage.setItem("user", user) ;
})