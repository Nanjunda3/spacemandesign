document.addEventListener("DOMContentLoaded", function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/interior.json",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottie-container2"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/productmanage.json",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottie-container3"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/projectmanage.json",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottie-container1"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/googlesymbol.json",
  });
});

function displayPopupForm() {
  document.getElementById("popupformmain1").style.display = "block";
}

function closePopupForm() {
  document.getElementById("popupformmain1").style.display = "none";
}

function handleClickOutside(event) {
  const popupForm = document.getElementById("popupformmain1");
  if (!popupForm.contains(event.target)) {
    closePopupForm();
  }
}

document.addEventListener("click", handleClickOutside);

setInterval(displayPopupForm, 50000);

function startAnimation() {
  var images = document.querySelectorAll(".image, .image3, .image5");
  var images1 = document.querySelectorAll(".image2, .image4");
  images1.forEach(function (image) {
    image.style.animation = "slide-down 1.5s linear";
  });
  images.forEach(function (image) {
    image.style.animation = "slide-up 1.5s linear";
  });
  setTimeout(function () {
    images.forEach(function (image) {
      image.style.animation = ""; // Clear animation after 3 seconds
    });
  }, 3000); // Wait for 3 seconds before restarting animation
  setTimeout(function () {
    images1.forEach(function (image) {
      image.style.animation = ""; // Clear animation after 3 seconds
    });
  }, 3000);
}

let lastScrollPos = 0;

function scrollEventHandler() {
  const currentScrollPos = window.scrollY;
  const scrollingDown = currentScrollPos > lastScrollPos;
  lastScrollPos = currentScrollPos;
  if (!scrollingDown) {
    return;
  }

  console.log(currentScrollPos);

  const scrollPositions = [
    {start: 800, end: 1000},
    {start: 2500, end: 2700},
  ];

  // Check if current scroll position falls within any defined range
  for (const {start, end} of scrollPositions) {
    if (currentScrollPos > start && currentScrollPos < end) {
      startAnimation();
      break; // Exit loop after triggering animation for the first matching range
    }
  }
}


