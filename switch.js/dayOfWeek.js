function dayOfWeek(input){
    let day = Number(input[0]);

switch(day){
    case 1: console.log("Monday");break;
    case 2: console.log("Tusday");break;
    case 3: console.log("Wensday");break;
    case 4: console.log("Thursday");break
    case 5: console.log("friday");break;
    case 6: console.log("Saturday");break;
    case 7: console.log("Sunday");break;
  default :console.log ("Error");break;
 }

} 
dayOfWeek(["8"])