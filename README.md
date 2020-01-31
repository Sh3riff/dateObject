# dateObject
A JavaScript date object code snippet


edit "// const targetElement = document.querySelector('.elementClass or #elementID');" at the top with any variable name to represent your target element.

edit "// targetElement.innerHTML = `${predefinedMethod}`;" at the bottom using the previously declared variable name and assign it to any of the predefined date object method

PREDEFINED METHODS: -

sec = second reading of time without preceeding zero if seconds is less than 10 i.e 7, it displays 7.
Sec = second reading of time with preceeding zero if second is less than 10 i.e 7, it displays 07.
min = minute reading of time without preceeding zero if minute is less than 10 i.e 7, it displays 7.
Min = minute reading of time with preceeding zero if minute is less than 10 i.e 7, it displays 07.
hr = hour reading of time without preceeding zero if hour is less than 10 i.e 7, it displays 7.
Hr = hour reading of time with preceeding zero if hour is less than 10 i.e 7, it displays 07.
HR = hour reading of time with preceeding zero & 12 format. if hour is less than 10 i.e 7, it displays 07 and if hour is greater than 12, it starts count from 1 i.e 15, it displays 03.
amPM = would return AM or PM depending on the hour of the day
HrMin = Hr:Min i.e 15:37
HRMin = HR:Min i.e 03:37 for 15:37
HrMinSec = Hr:Min:Sec i.e 15:37:45
HRMinSec = HR:Min:Sec i.e 03:37:45 for 15:37:45
fulltime = would return   03:37:45 PM for 15:37:45
dayIndex = would return the index value for the day of the week from 0-6
day = would return abbr. day i.e sun, mon etc
dayFull = would return Sunday, Monday etc
date = would return the date of that day
monthIndex = would return the index value for the month of the year from 0-11
month = would return abbr. month i.e Jan, Feb etc
monthFull = would return January, February etc
year = would return the year i.e 2020
fulldate = would return fri Jan 31 2020 for example
