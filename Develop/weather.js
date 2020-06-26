
$(document).ready(function () {
    getDate();
    function getDate() {
        var today = $("#currentDay");
        var d = (new Date()).toString().split(' ').splice(1, 4).join(' , ');
        today.text(d);
    }
    
    function getCurrentHour() {
        var d = (new Date()).toString().split(' ')[4];
        return parseInt(d.split(':')[0]);
        
    }
    var timeSlots = $(".timeslot")
    
    $.each(timeSlots, function(index, row){
        var time = $(row).find($(".time"))[0];
        var input = $(row).find($("input"))[0];
        var button = $(row).find($(".saveBtn"))[0];
        onClickBtn(button, time, input);
        var message = setData(time);
        $(input).val(message);
    }); 
    
    function onClickBtn(button, time, input) {
        $(button).on("click", function(event){
            event.preventDefault();
            var message = $(input).val();
            localStorage.setItem(JSON.stringify(time.innerText) , (message));
        });
    }

    function setData(time) {
        return localStorage.getItem(JSON.stringify(time.innerText));     
    }

    // if current time is equal to time array value, removeclass futre then addclass present 
    // else if timearray value is less than currenttime,  removeclass future  addclass past else add class future
    //   console.log(typeof(currentTime));
    
    var currentHour = getCurrentHour();
    for(var i = 0; i < timeSlots.length; i++) {
        var row = timeSlots[i];
        var time = $(row).find($(".time"))[0];  
        var hour =  parseInt(time.innerText.split(':')[0]);
        console.log(typeof(hour));
    
        if (currentHour === hour) {
            $(row).children(".content").children().addClass("present");   
        }
        if (currentHour < hour) {
            $(row).children(".content").children().addClass("future");
        } 
        if (currentHour > hour) {
            $(row).children(".content").children().addClass("past");
        } 
    }
});