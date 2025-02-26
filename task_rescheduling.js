// You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks.
//  Implement the following operations without using specific method references:

// Remove the first task from the list.
// Add two new high-priority tasks to the beginning of the list.
// Replace the last task in the list with a new task.
// Log the updated task list after all operations.


let taskArr = ["T1", "T2", "T3", "T4", "T5"];
console.log("Task array is: ", taskArr);
console.log("Removing the first task...");

let newArr = []

for(let i=1; i<taskArr.length;i++){
    newArr[i-1] = taskArr[i];
}


console.log("Task removed successfully!!");
console.log(newArr);

console.log("Adding 2 high priority tasks at beginning T6 & T7...");
// Adding high priority task at beginning T6 & T7
for(i=taskArr.length-1;i>=0;i--){
    taskArr[i+2] = taskArr[i];
}
taskArr[0] = "T6";
taskArr[1] = "T7";
console.log("T6 & T7 added at the beginning successfully!!");
console.log(taskArr);

console.log("Replacing the last task with a new task T8..");
let lastTaskIndex = taskArr.length-1;
taskArr[lastTaskIndex] = "T8";
console.log("Task replaced successfully!!");
console.log(taskArr);
