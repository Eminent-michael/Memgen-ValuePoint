/** @format */

// Strolling Changing color script

var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function () {
  /*Apply classes for slide in bar*/
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("bg-white");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("bg-secondary");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-gray-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-100");
    navcontent.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
  }
});


// Toggle nav bar script


 /*Toggle dropdown list*/
    /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;

    function check(e) {
      var target = (e && e.target) || (event && event.srcElement);

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }

    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }


// Drop Down Effect on form page

const digitalAsset = document.querySelector("#digital-asset")
const digitalAssetBody = document.querySelector("#digital-asset-body")
const dropdownIcon = document.querySelector("#digital-dropdown")

const estateAsset = document.querySelector("#estate-asset");
const estateAssetBody = document.querySelector("#estate-asset-body");
const estateDropdownIcon = document.querySelector("#estate-dropdown");

const tradingAsset = document.querySelector("#trading-asset");
const tradingAssetBody = document.querySelector("#trading-asset-body");
const tradingDropdownIcon = document.querySelector("#trading-dropdown");

digitalAsset.addEventListener("click", () => {
  digitalAssetBody.classList.toggle('addheight');
  digitalAssetBody.classList.toggle("py-8");
  dropdownIcon.classList.toggle("open");
})

estateAsset.addEventListener("click", () => {
 estateAssetBody.classList.toggle("addheight");
  estateAssetBody.classList.toggle("py-8");
  estateDropdownIcon.classList.toggle("open");
});

tradingAsset.addEventListener("click", () => {
  tradingAssetBody.classList.toggle("addheight");
  tradingAssetBody.classList.toggle("py-8");
  tradingDropdownIcon.classList.toggle("open");
});