const date = new Date();

const cal=()=>{
    date.setDate(1);

    const monthdays = document.querySelector(".days");
    
    const lastday = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    
    const prevlastd = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    const lastdayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
    
    const nextday = 7 - lastdayIndex - 1;
    
    const fdIndex = date.getDay();
    
    let months = [
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
    ]
    
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    
    document.querySelector(".date p").innerHTML = new Date().toDateString();
    
    let days = " ";
    
    for(let a = fdIndex; a>0; a--){
        // days+=`<div class="prev-date">${prevlastd - a + 1}</div>`;
        days+=`<div class="prev-date">${0}</div>`;
    }
    
    for(let i=1; i<=lastday; i++){
       if(i===new Date().getDate() && date.getMonth() === new Date().getMonth()){
         days+=`<div id="today-date">${i}</div>`;
       }
       else{
         days+=`<div>${i}</div>`;
       }
    }
    
    // for(let x = 1; x <= nextday; x++){
    //     days+=`<div class="next-date">${x}</div>`;
    // }
    
    monthdays.innerHTML = days;
}


document.querySelector(".prev").addEventListener('click', ()=>{
   date.setMonth(date.getMonth()-1);
   cal();
})

document.querySelector(".next").addEventListener('click', ()=>{
    date.setMonth(date.getMonth()+1);
    cal();
})

cal();