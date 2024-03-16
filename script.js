document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById("display");
    let decrementbtn = document.getElementById("decrement");
    let incrementbtn = document.getElementById("increment");
    let clearbtn = document.getElementById("clear");
    let errordiv = document.querySelector('.error'); // Using querySelector to select the first element with the class 'error'
    let count = 0;

    function update() {
        display.innerHTML = count;
        if(count==0)
        {
            clearbtn.style.display='none'
        }
        
           
        
    }

    incrementbtn.addEventListener('click', () => {
        count++;
        if(count>=0)
        {
            errordiv.style.visibility= 'hidden';
            clearbtn.style.display='block'
        }
        update();
    });

    decrementbtn.addEventListener('click', () => {
        
        if (count > 0) {
            count--;
            update();
        } else if (count === 0) {
            clearbtn.style.display='block'
            errordiv.style.visibility = 'visible';
        }
    });

    clearbtn.addEventListener('click', () => {
        count = 0;
        errordiv.style.visibility= 'hidden';
        clearbtn.style.display='none'
        update();
    });
    update();
});
