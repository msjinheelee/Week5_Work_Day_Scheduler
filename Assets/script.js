/**
 * CRITERIA
 */

//  GIVEN I am using a daily planner to create a schedule
//  WHEN I open the planner
//  1. THEN the current day is displayed at the top of the calendar
//  WHEN I scroll down
//  THEN I am presented with timeblocks for standard business hours
//  WHEN I view the timeblocks for that day
//  THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//  WHEN I click into a timeblock
//  THEN I can enter an event
//  WHEN I click the save button for that timeblock
//  THEN the text for that event is saved in local storage
//  WHEN I refresh the page
//  THEN the saved events persist
  
 // current day is displayed at the top of the calendar

 var saveBtn = $(".saveBtn");


     $("#currentDay").text(moment().format("dddd Do of MMMM YYYY"));
 
//  color time blocks and start interval to re-color every minute
function colorTimeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// WHEN I click the save button for that time block
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});

// WHEN I refresh the page
// THEN the saved events persist
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

/**
 * CALL FUNCTIONS
 */

colorTimeBlock();
usePlanner();

 
 
 