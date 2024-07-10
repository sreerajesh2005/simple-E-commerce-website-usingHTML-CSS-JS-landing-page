var collectionText = document.getElementById("collectionText");
if (collectionText) {
  collectionText.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var joinUsText = document.getElementById("joinUsText");
if (joinUsText) {
  joinUsText.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='footerBackground']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var saleText = document.getElementById("saleText");
if (saleText) {
  saleText.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='nikeAirJordan1LowRetroOGImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var rectangle = document.getElementById("rectangle");
if (rectangle) {
  rectangle.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var airJordanLogoPNGVectorEP = document.getElementById(
  "airJordanLogoPNGVectorEP"
);
if (airJordanLogoPNGVectorEP) {
  airJordanLogoPNGVectorEP.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='de662e47E70642029ed7D2ba37Image']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}