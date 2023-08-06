document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", adder);

    taskInput.addEventListener('keydown',function(e){
       // console.log(e.key);
        if(e.key=="Enter"){
            e.preventDefault();
            adder();
        }
    });
    function adder(){
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                const priorityValue = prioritySelect.value;
                const priorityClass = getPriorityClass(priorityValue);
                
                const taskItem = document.createElement("li");
                taskItem.className = `task-item ${priorityClass}`;
                
                //console.log(priorityClass)
                taskItem.innerHTML = `
                    ${taskText}
                    <button class="deleteBtn">&#9986;</button>
                `;
                const deleteBtn = taskItem.querySelector(".deleteBtn"); 
                deleteBtn.classList.add('delete-btn');
    
                deleteBtn.addEventListener("click", function () {
                    taskList.removeChild(taskItem);
                });
    
                taskList.appendChild(taskItem);
    
                taskInput.value = "";
            }
        }
    
    function getPriorityClass(priority) {
        switch (priority) {
            case "1":
                return "high";
            case "2":
                return "medium";
            case "3":
                return "low";
            default:
                return "";
        }
    }
});
