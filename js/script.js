var sliderImages = Array.from(document.querySelectorAll('.slider-container img')); // Get Slider Items | Array.from [ES6 features]
var slidesCount = sliderImages.length; // Get Number Of Slides
var currentSlide = 1; // Set Current Slide
var slideNumberElement = document.getElementById("slide-number"); // Slide Number Element
var prevButton = document.getElementById("prev"); // Previous and Next Buttons
var nextButton = document.getElementById("next"); // Previous and Next Buttons
var paginationElement = document.createElement("ul"); // Create The Main UL Element
paginationElement.setAttribute("id", "pagination-ul"); //Set ID on Created UL Element

for (var i = 1; i <= slidesCount; i++) { // Create List Items Based on Slides Count
    var paginationItem = document.createElement("li"); // Create The LI Element
    paginationItem.setAttribute("data-index", i);  //Set ID on Created LI Item
    paginationItem.appendChild(document.createTextNode(i));  // Set Item Content
    paginationElement.appendChild(paginationItem); // Set Item to The Main UL List
}

document.getElementById("indicators").appendChild(paginationElement); // Add The Created UL List To The Page
var paginationCreatedUl = document.getElementById("pagination-ul"); // Get The New Created UL
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li')); // Get Pagination Items | Array.from [ES6 features]

for (var i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    };
};

prevButton.onclick = prevSlide; // Handle Click on Previous Button
nextButton.onclick = nextSlide; // Handle Click on Next Button

theChecker(); // Trigger The Checker Function

function prevSlide() { // Previous Slide Function
    if (prevButton.classList.contains("disable")) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function nextSlide() { // Next Slide Function
    if (nextButton.classList.contains("disable")) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }    
}

function theChecker() { // Create The Checker Function
    slideNumberElement.textContent = "Slide # " + (currentSlide) + " of " + (slidesCount); // Set The Slides Number Element Content
    removeAllActive(); // Remove All Active Classes From Images
    sliderImages[currentSlide - 1].classList.add("active"); // Set Active Class on Current Slide
    paginationCreatedUl.children[currentSlide - 1].classList.add("active"); // Set active class on Current Pagination Item
    if (currentSlide == 1) { // Check If The Current Slide Is The First
        prevButton.classList.add("disable"); // Add disable Class on Previous Button
    } else {
        prevButton.classList.remove("disable"); // Remove disable Class From Previous Button
    };
    if (currentSlide == slidesCount) { // Check If The Current Slide Is The First
        nextButton.classList.add("disable"); // Add disable Class on Next Button
    } else {
        nextButton.classList.remove("disable"); // Remove disable Class From Next Button
    };
}

function removeAllActive() { // Remove All Active Class
    sliderImages.forEach(function (img) { // Loop Through Images
        img.classList.remove("active");
    });
    paginationsBullets.forEach(function (bullet) { // Loop Through Bullets
        bullet.classList.remove("active");
    });
}
