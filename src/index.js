document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // console.log("domloaded")



  let form = document.querySelector("form")
  // console.log(form)
  form.addEventListener('submit',(e)=>{
    //prevent default form action
    e.preventDefault() 
    //built the todo after input
    buildToDoList(e.target.new_task.value)
    //reset the form
    form.reset()
  })
});

//function that takes in input and builds todolist
function buildToDoList(todo){
  //make p tag and add text
  let p = document.createElement('p')
  p.textContent = `${todo} `;
  //make btn and add string
  let btn = document.createElement('button')
  btn.textContent = " x"
  btn.addEventListener('click',deleteTasks)
  //make btn child of p
  p.appendChild(btn)
  //add the p tag to the unordered list
  document.querySelector("#tasks").appendChild(p)

}

function deleteTasks(e){
  e.target.parentNode.remove()
}

// function buildToDoList(todo){
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   btn.textContent = " x"
//   p.textContent = `${todo} `;
//   p.appendChild(btn)
//   console.log(p)
//   document.querySelector("#tasks").appendChild(p)

// }

// console.log("before dom loaded")
