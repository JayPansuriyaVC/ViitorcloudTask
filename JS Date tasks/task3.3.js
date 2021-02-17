// 3 Write a JavaScript function to get time differences in months between two dates.

function task3_3() {
    console.log("3 Write a JavaScript function to get time differences in months between two dates.");
    let date1 = new Date(prompt("add first date :", "2021-12-31"));
    let date2 = new Date(prompt("add second date :", "2022-01-01"));

    function diffMonth(dt1, dt2) {

        let mSec = dt2 - dt1;

        let Dy = mSec / (1000 * 60 * 60 * 24);

        if (mSec < 0) {
                [dt1,dt2]=[dt2,dt1];
        }
     
        const fixDate = dt1.getDate() ;
        let month = 0;
        while (Dy) {
            dt1.setDate(dt1.getDate() + 1);

            if (fixDate == dt1.getDate()) {
                console.log(dt1);
                month = month + 1;
            }
            Dy = Dy - 1;
        }
        console.log("total num of months:" + month);
    }
    diffMonth(date1, date2);

}