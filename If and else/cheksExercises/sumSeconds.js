function solve(input){

    let time1  = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);
     

     let totalSeconds = time1 + time2 + time3;
     let minutes = Math.floor(totalSeconds /60);
     let seconds = totalSeconds % 60;
   

     if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
     }else { 
        console.log(`${minutes}:${seconds}`);
     }


}
//solve(["35","45","44"]);
solve(["22","7","34"]);