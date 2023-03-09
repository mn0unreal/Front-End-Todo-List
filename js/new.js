// Find elements  
const addTaskBtn    = document.getElementById('addTaskBtn')
const inputs        = document.querySelectorAll('input')
const validateMsg   = document.getElementById('validationMessage')
const allTasks      = document.getElementById('allTasks') 
const noTask        = document.getElementById('noTask')

// Event
addTaskBtn.onclick = function() {
    if(inputs[0].value == '' || inputs[1].value == '') {
        // error
        if(inputs[0].value.trim() == '') {
            validateMsg.innerText = 'You must enter Title '
            validateMsg.style.display = 'block'
        } else if(inputs[1].value.trim() == '') {
            validateMsg.innerText = 'You must enter date '
            validateMsg.style.display = 'block'
        }
    } else {
        //add valid class="alert alert-primary" 
        // id="noTask"
        // No Tasks Added yet 

        validateMsg.style.display = 'none'  // to remove validate message 
        
        noTask.style.display = 'none' // to remove no task text
        
        
        // <i class="fa fa-times trash-all" aria-hidden="true" style="color: #b02c38;"></i> | 
        // to add tasks inputs
        allTasks.innerHTML +=`
        <div id="noTask" class="alert alert-primary">
            <span class="float-starts">
            <i class="fa fa-trash trash-one" aria-hidden="true" style="color: #b02c38;"></i>   |  ${inputs[1].value}
            </span>
            <h5 class="text-center"> ${inputs[0].value} </h5>
        </div>
        `
        // reset inputs = 
        inputs[0].value = ''; // Task Title 
        inputs[1].value = ''; // Task Date 

    }
}

document.addEventListener('click',function(e){
    if(e.target.classList.contains('trash-one')){
        e.target.parentElement.parentElement.remove()
        if(allTasks.childElementCount==0 ){
            noTask.style.display = 'block' 
        }
        //noTask.style.display = 'block' //  after delete all tasks reset no task style to block
    }
    // else if(e.target.classList.contains('trash-all')){
    //     e.target.parentElement.parentElement.removeChild(allTasks)
    //     if(allTasks.childElementCount==0 ){
    //         noTask.style.display = 'block' 
    //     }
    // }
})
// CRUD