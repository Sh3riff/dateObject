(function showTime (){
    let timeNow = new Date();

    // const targetElement = document.querySelector('.elementClass or #elementID');

    //ADD preceeding zero to hr, min, sec less than 10
    const addZeroToTime = m => {
        if(m < 10){
            return '0'+m
        }else {
            return m
        }
    };
    const aZ = addZeroToTime;

    // format '.getHours' to 12hr format b4 adding preceeding zero
    const hourFormat = hr => {
        let m = hr % 12 || 12;
        if(m < 10){
            return '0'+m
        }else {
            return m
        }      
    };
    const hf = hourFormat;

    // check if hour is  AM/PM. only use with 12hr format
    const amPm = hr => hr<12 ? 'am' :  'pm';

    // format days to word

    const daysOfWeek = ['sun','mon','tue','wed','thur','fri','sat'];
    const daysOfWeekFull = ['Sunday','Monday','Tueday','Wednesday','Thurday','Friday','Saturday'];

    const mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monFull = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      
    let sec = timeNow.getSeconds();
    let min = timeNow.getMinutes();
    let hour = timeNow.getHours();
    let hrAmPm = `${amPm(hour)}`
    let hrMin = `${hf(hour)}:${aZ(min)}`;    
    let hrMinSec = `${hf(hour)}:${aZ(min)}:${aZ(sec)}`;
    let fulltime = timeNow.toLocaleTimeString();        
    let dayIndex = timeNow.getDay();
    let day = `${daysOfWeek[dayIndex]}`;
    let dayFull = `${daysOfWeekFull[dayIndex]}`;
    let date = timeNow.getDate();
    let monthIndex = timeNow.getMonth();
    let month = `${mon[monthIndex]}`
    let monthFull = `${monFull[monthIndex]}`
    let year = timeNow.getFullYear();
    let fulldate = timeNow.toDateString();
    
    
    targetElement.innerHTML = `${predefinedMethod}`;

    setTimeout(showTime, 1000);
}());