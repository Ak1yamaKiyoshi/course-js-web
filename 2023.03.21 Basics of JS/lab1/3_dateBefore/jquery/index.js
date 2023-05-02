


$(document).ready(function() {
    $('body button').click(function() {
        date = parseInt($('#number').val().replace(/\D/g, ""))
        
        daysInMonth = { 1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
        if (date%4 == 0 && date%100 != 0) daysInMonth[2] = 29

        year = Math.round(date % 10000)
        month = Math.round((date / 10000) % 100)
        day = Math.round(((date / 10000) / 100) % 100)

        nextDate = { day:day, month:month, year:year}
        prevDate = { day:day, month:month, year:year }

        /* next date */
        if ( day < daysInMonth[month]) nextDate.day ++ 
        else if ( month < 12) { nextDate.month ++; nextDate.day = 1; } 
        else { nextDate.year++; nextDate.month = 1; nextDate.day = 1; }

        /* prev date */
        if ( day > 1) prevDate.day --;
        else if ( month > 1) {prevDate.month--; prevDate.day = daysInMonth[prevDate.month]; } 
        else { prevDate.year--; prevDate.month = 12; prevDate.day = daysInMonth[prevDate.month]; }

        $('#next').text(nextDate.day.toString() + "." + nextDate.month.toString() + "." + nextDate.year.toString()) 
        $('#prev').text(prevDate.day.toString() + "." + prevDate.month.toString() + "." + prevDate.year.toString())
    });
});



/*
    Запитати дату (день, місяць, рік) та вивести попередню та наступну за нею дату.
    Врахуйте можливість переходу на наступний/попередній місяць, рік та високосний рік.
    Високосний рік або кратний 400, або кратний 4 і при цьому не кратний 100.
*/