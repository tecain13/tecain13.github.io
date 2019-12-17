var currenthour //turn red
var pasthour //turn grey
var futurehour // turn green
var time;



$(document).ready(function () {

    //save function w/ local storage retention

    $(".saveBtn").on("click", function () {

        var value = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    })
    //change time blocks for each, mirror syntax

    $("#hour-10 .desciption").val(localStorage.getItem("hour-10"));

    //recognize current time
    function updatehour() {
        var currenthour = moment().hours()
        $(".time-block").each(function () {
            var blockhour = parseInt($(this).attr("id").split("-")[1]);
            if (blockhour < currenthour) {
                $(this).addClass("past")
            } else if (blockhour === currenthour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })

    }

    updatehour();

    //compare current time to other functions

    //project future hours green
    //if time > current hour, turn green?

    //project current hour red
    //if time = current hour, turn red

    //project previous hours grey
    //if pasthour < current hour, turn grey



});



