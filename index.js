let students=[
    {name:"kala",age:20},
    {name:"raj",age:21},
    {name:"vaishu",age:19},
    {name:"surya",age:22}
]
function displayStudents(){
    const list=document.getElementById("studentslist");
    list.innerHTML="";

    students.forEach((student,index) => {
        let li=document.createElement("li") ;  
        li.textContent=`${index+1}.${student.name} - Age:${student.age}`;
        list.appendChild(li);
    });
}
function sortByName() {
    students.sort((a,b)=>arguments.name.localeCompare(b.name));
    displayStudents();
}
function sortByAge() {
    students.sort((a,b)=>a.age-b.age);
    displayStudents();
}