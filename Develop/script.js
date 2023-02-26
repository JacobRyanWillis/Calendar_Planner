var timeBlock = $('.time-block');
var saveBtn = $('.saveBtn');
$(function () {

  saveBtn.click(function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
  })
  
  var currentHour = dayjs().get('hour');

    timeBlock.each(function () {
        var divHour = $(this).attr("id");
        var divHourParsed = parseInt(divHour);

        console.log(divHour);
        if (currentHour === divHourParsed) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass("present");
        }
        else if (currentHour > divHourParsed) {
          $(this).removeClass('future');
          $(this).removeClass('present');
          $(this).addClass('past');
        }
        else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
    });
 
  timeBlock.each(function() {
    var id = $(this).attr('id');
    var savedValue = localStorage.getItem(id);
    var test = $(this).find('.description').val(savedValue);
    console.log(test);
  });
  
  var currentDay = dayjs().format('dddd, MMMM Do');
  $('#currentDay').text(currentDay);
});

