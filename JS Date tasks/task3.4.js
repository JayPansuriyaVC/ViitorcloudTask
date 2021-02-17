// 4 Write a JavaScript function to get the week end date.
function task3_4(){
    console.log("4 Write a JavaScript function to get the week end date.");
let dt1 =  new Date(prompt("add year and month and date :","2021-02-05"));


function weekEnd(date1) {

    const d = date1.getDate();
    for (let i = 0; i < 7; i++) {
        date1.setDate(d + i + 1);
        if (date1.getDay() == 0) {
            console.log(date1.toDateString());
        }
    
    }
}

weekEnd(dt1);
}
