$(document).ready(function() {
    // var init = false; 
    var rightNow = dayjs();
    // rightNow.extend(LocalizedFormat);

    // Putting in current time 
    var current = $('#current');
    current.text(rightNow.format('dddd, MMMM D, YYYY h:mm A'));

    // setting colors for time slots 
    var calander = new Date(); // initial date and time
    var hour = calander.getHours();

    for (var i = 9; i < 18; i++) {
        if (i < hour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === hour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > hour) {
            document.getElementById(i.toString()).classList.add('future');
        };
    };
});
    // Storing things locally
    $('.buttonSave').click(function() {
        var nineBox = document.querySelector('.nine').value;
        localStorage.setItem('9oclock', nineBox);

        console.log(nineBox);
        
        var tenBox = document.querySelector('.ten').value;
        localStorage.setItem('10oclock', tenBox);
        
        var elevenBox = document.querySelector('.eleven').value;
        localStorage.setItem('11oclock', elevenBox);
        
        var twelveBox = document.querySelector('.twelve').value;
        localStorage.setItem('12oclock', twelveBox);
        
        var oneBox = document.querySelector('.one').value;
        localStorage.setItem('1oclock', oneBox);
        
        var twoBox = document.querySelector('.two').value;
        localStorage.setItem('2oclock', twoBox);
    
        var threeBox = document.querySelector('.three').value;
        localStorage.setItem('3oclock', threeBox);
        
        var fourBox = document.querySelector('.four').value;
        localStorage.setItem('4oclock', fourBox);
    
        var fiveBox = document.querySelector('.five').value;
        localStorage.setItem('5oclock', fiveBox);
        console.log();
    });

    // Displaying the saved stuffy stuff 

    var nineSaved = localStorage.getItem('9oclock');
    document.querySelector('.nine').value = nineSaved;

    var tenSaved = localStorage.getItem('10oclock');
    document.querySelector('.ten').value = tenSaved;

    var elevenSaved = localStorage.getItem('11oclock');
    document.querySelector('.eleven').value = elevenSaved;

    var twelveSaved = localStorage.getItem('12oclock');
    document.querySelector('.twelve').value = twelveSaved;

    var oneSaved = localStorage.getItem('1oclock');
    document.querySelector('.one').value = oneSaved;

    var twoSaved = localStorage.getItem('2oclock');
    document.querySelector('.two').value = twoSaved;

    var threeSaved = localStorage.getItem('3oclock');
    document.querySelector('.three').value = threeSaved;

    var fourSaved = localStorage.getItem('4oclock');
    document.querySelector('.four').value = fourSaved;

    var fiveSaved = localStorage.getItem('5oclock');
    document.querySelector('.five').value = fiveSaved;

    