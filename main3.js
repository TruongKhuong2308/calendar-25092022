const date = new Date();

date.setDate(1)
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}


const renderCalendar = () =>{


    const monthDays = document.querySelector(".days")

    const lastDay = new Date(date.getUTCFullYear(), date.getMonth()+1,0).getDate() ;

    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

    console.log(prevLastDay)

    const firstDayIndex = date.getDate();

    const lastDayIndex = new Date(date.getFullYear,date.getMonth()+1,0).getDay();

    const nextDays = 7 - lastDayIndex -1;

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

    document.querySelector('#month').innerHTML = month[date.getMonth()]

    let days = "";

    for(let x = firstDayIndex; x>0;x--){
        days+= `<div class"prev-date">${prevLastDay - x + 1}</div>`;
    }


    for(let i = 1;i<=lastDay;i++){
        if( i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;

        }else{
            days += `<div>${i}</div>`;
        }
        monthDays.innerHTML = days;
        // days += `<div>${i}</div>`
    }
    
    for(let j =1;j<=nextDays; j++){
        days +=`<div class="next-date">${j}</div>`
        monthDays.innerHTML = days;
    }

}

document.querySelector(".prev-month").addEventListener(`click`,() =>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})


document.querySelector(".next-month").addEventListener(`click`,() =>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})

// let currDate = new Date()
// let curr_month = {value: currDate.getMonth()}
// let curr_year = {value: currDate.getFullYear()}

// renderCalendar(curr_month.value, curr_year.value)
// document.querySelector(".prev-year").onclick = () => {
//     --curr_year.value
//     renderCalendar(curr_month.value, curr_year.value)
// }

// document.querySelector(".next-year").onclick = () => {
//     ++curr_year.value
//     renderCalendar(curr_month.value, curr_year.value)
// }

renderCalendar()

