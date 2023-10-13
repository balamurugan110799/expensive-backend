exports.getDateTime = (datetime) => {
    var now = new Date(datetime * 1000);
    var year = now.getFullYear();
    var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var monthof = months[now.getMonth()];
    var localtimestring = now.toLocaleTimeString();
    var localstring = now.toLocaleString();
    var dateString = now.toLocaleDateString();

    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var datetime={
        year:year,
        month:month,
        day:day,
        hour:hour,
        minute:minute,
        second:second,  
        monthof:monthof,
        localstring:localstring,
        localtimestring:localtimestring,
        dateString:dateString
    }
    return datetime;
}