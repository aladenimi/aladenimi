
let name = "Alade Emmanuel";
let courses = ["HTML","CSS","Javascript"];

var numofCourses = courses.length
let numDisplay = "";

for (let i=1; i<=200; i++){
    if (numofCourses%2==1){
        if(i%2==1){
            if(i==200-1){
                break; 
            }
            numDisplay += i + 2+ "";
        }
    }
}
console.log(numDisplay)