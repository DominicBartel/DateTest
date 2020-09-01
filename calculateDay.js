
var todaysDate = new Date();
var dateInput
window.onload = function () {
    dateInput = document.getElementById('date');
    dateInput.value = getDateHTML(todaysDate);

    dateInput.addEventListener('input', function (evt) {
        var selectedDate = new Date(dateInput.value + " 00:00:00");
        var displayhappyDiv = document.getElementById('hapDiv');
        var hapText = document.getElementById("hap");
        
        hapText.innerHTML = hapinessLevel(selectedDate);
        if (displayhappyDiv.style.display != "block"){
            displayhappyDiv.style.display = "block";
        }
        
        
    });
};

var getDateHTML = function (date) {
    var month = date.getMonth().toString()
    var day = date.getDay().toString()
    if (month.legnth = 1) {
        month = "0" + month
    }

    if (day.legnth = 1) {
        day = "0" + day
    }

    return date.getFullYear().toString() + "-" + month + "-" + day;
};

var hapinessLevel = function(checkDate){
    var hapLevel = 0;
    var checkYear = checkDate.getFullYear();
    var timeZero = " 00:00:00";
    
    holidays.holiday.forEach(val =>{
        var holidayObj = new Date(checkYear.toString() +"-"+ val.date + timeZero);
        var difference = difference = holidayObj - checkDate
        var days = difference / 84000000
        
        
        
        if(days >= 0){
            if(days <= 10){
                hapLevel += 10
            }
            else if( days <= 30){
                hapLevel += 5
            }
            else if( days <= 60){
                hapLevel += 1
            }
        }
        
        console.log(val.name + days)
        console.log("Points added:" + hapLevel)
        
        
    })
return hapLevel;
}

var holidays =
{
    "holiday": [
        { "name": "New Years Day", "date": "01-01" },
        { "name": "Good Friday", "date": "04-10" },
        { "name": "Memorial Day", "date": "05-25" },
        { "name": "4th of July", "date": "06-04" },
        { "name": "Labor Day", "date": "09-07" },
        { "name": "Columbus Day", "date": "10-12" },
        { "name": "Thanksgiving", "date": "11-26" },
        { "name": "Thanksgiving", "date": "11-27" },
        { "name": "Holiday shutdown", "date": "12-24" },
        { "name": "Holiday shutdown", "date": "12-25" },
        { "name": "Holiday shutdown", "date": "12-26" },
        { "name": "Holiday shutdown", "date": "12-27" },
        { "name": "Holiday shutdown", "date": "12-28" },
        { "name": "Holiday shutdown", "date": "12-29" },
        { "name": "Holiday shutdown", "date": "12-30" },
        { "name": "Holiday shutdown", "date": "12-31" }
    ]
}