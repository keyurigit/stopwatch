
let startBtn = document.getElementById('play'); 
let stopBtn = document.getElementById('pause'); 
let resetBtn = document.getElementById('reset'); 
  
let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0;
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    document.getElementById('hour').value = "00"; 
    document.getElementById('minute').value = "00"; 
    document.getElementById('second').value = "00";
}); 
  
function stopWatch() { 
    if (timer) { 
        count++; 
  
        if (count == 100) { 
            second++; 
            count = 0; 
        } 
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 
  
        let hourstring = hour; 
        let minutestring = minute; 
        let secondstring = second; 
        let countString = count; 
  
        if (hour < 10) { 
            hourstring = "0" + hourstring; 
        } 
  
        if (minute < 10) { 
            minutestring = "0" + minutestring; 
        } 
  
        if (second < 10) { 
            secondstring = "0" + secondstring; 
        } 
  
        if (count < 10) { 
            countString = "0" + countString; 
        } 
  
        document.getElementById('hour').value = hourstring; 
        document.getElementById('minute').value = minutestring; 
        document.getElementById('second').value = secondstring; 
        setTimeout(stopWatch, 10); 
    } 
}