let elementField = [];

const pushElement = () =>{
    const inputData = document.getElementById("task").value;
    if(inputData){
        elementField.push(inputData);
        document.getElementById("task").value = '';
        displayField();
    }else{
        alert("Please enter a value")
    }
}

const popElement = () =>{
   if(elementField.length > 0){
    elementField.pop();
    displayField();
   }else{
    alert("Field is empty, nothing to be delete");
   }
}

const displayField = () =>{
    document.getElementById('displayField').innerHTML = '';
    elementField.forEach(task =>{
        const li = document.createElement('li');
        li.innerText = task;
        document.getElementById("displayField").appendChild(li)
    })
}