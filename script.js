
//About Me
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// -----------------------------------------------


// portfolio and websites
// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}




// ---------------------------------------------------------

//Contact Me
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

// ---------------------------------------------------------

//Working Experience 
var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal 
btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}


//----------------------------------------------------------

var btn5 = document.getElementById("myBtn5");
btn5.onclick = function() {
    window.location.href = './images/MGad_CV.pdf'
}

//-----------------------------------------------------------

// for my working experience timeline/carousel
var workArr  = document.querySelectorAll('.work');
var buttonArr = document.querySelectorAll('.circles');
var activeID;
var activeWork;
var bool = true;
var i = 0

buttonArr.forEach(one => {
  one.onclick = function(){
    bool = false;
    buttonArr.forEach(one => {
      one.classList.remove('activeBut');
    });
    one.classList.add('activeBut')
    activeID = one.getAttribute('id')[one.getAttribute('id').length-1];
    workArr.forEach(one=>{
      one.classList.remove('activeWork')
      one.getAttribute('id')[one.getAttribute('id').length-1] === activeID ? activeWork = one: activeWork = activeWork;
    })
    activeWork.classList.add('activeWork')
    setTimeout(() => {
      bool = true;
    }, 20*1000);
  }
});

setInterval(() => {
  if (bool) {

    buttonArr.forEach(one => {
      one.classList.remove('activeBut');
    });
    
    workArr.forEach(one=>{
      one.classList.remove('activeWork')
    });
    
    workArr[i].classList.add('activeWork');
    buttonArr[i].classList.add('activeBut')
    
    if (i===workArr.length-1) {
      i = 0
    } else {
      i++;
    }
  }
}, 1000*10);



//--------------------------------------------------------

// To open images directly from the card  
var images = document.querySelectorAll('img');

images.forEach(one => {
    one.onclick = () => {
        // var newModal = document.create('div')
        var img = one.getAttribute('src')
        // one.src= "./images/_MG_6015_copy-2.jpg";
        window.location.href = img;
    }
})

