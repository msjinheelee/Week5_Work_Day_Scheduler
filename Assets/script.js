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
/**
 * DEFINE VARIABLES
 */
//  var saveBtn = $(".saveBtn");
 /**
  * FUNCTIONS
  */
 
 // current day is displayed at the top of the calendar
 $(init);
 function init() {
     $("#currentDay").text(moment().format("dddd Do of MMMM YYYY"));
 }

//  color time blocks and start interval to re-color every minute
 timeBlockColor();
 setInterval(colorTimeBloacks, 60000);

// update time blocks with data in local storage//
$(".time-block").each(function(){
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().formate("DDDYYYY") + blockId));
});

// attach our handler for the save buttons
$(".saveBtn").on("click", handleSave);


 // each time block is color-coded to indicate whether it is in the past, present, or future
 function timeBlockColor() {
    //  var hour = moment().hours();
 
     $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").replace("hour-","")); 
        var currHour = parseInt(moment(),format("H")); 
         // console.log(this); //each time-block
 $(this).reniveClass("past present future");

         if (blockHour < currentHour) {
             $(this).addClass("past");
         } else if (blockHour > currentHour) {
             $(this).addClass("future");
         } else {
             $(this).addClass("present");
         }
     });
 }
 
 // WHEN I click the save button for that time block
 function handleSave(event){
     var hourID = $(this).parent().attr("id");
     localStorage.setItem(moment().format("DDDYYYY")+ hourID, $("#"+hourID + " textarea").val());
 }
 
 
//  saveBtn.on("click", function() {
 
//      // console.log(this); //save button
//      var time = $(this).siblings(".hour").text();
//      var plan = $(this).siblings(".plan").val();
 
//      // THEN the text for that event is saved in local storage
//      localStorage.setItem(time, plan);
//  });
 
//  // WHEN I refresh the page
//  // THEN the saved events persist
//  function usePlanner() {
 
//      $(".hour").each(function() {
//          var currHour = $(this).text();
//          var currPlan = localStorage.getItem(currHour);
 
//          // console.log(this);
//          // console.log(currHour);
 
//          if(currPlan !== null) {
//              $(this).siblings(".plan").val(currPlan);
//          }
//      });
//  }
 
//  /**
//   * CALL FUNCTIONS
//   */
//  timeBlockColor();
//  usePlanner();
 
 
 