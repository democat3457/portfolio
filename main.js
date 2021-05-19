console.log("hi");

"use strict";
$(function(){
  Array.from(document.querySelectorAll("ul.topnav a.text"))
       .filter(link => 
            ((window.location.pathname.endsWith("portfolio") || window.location.pathname.endsWith("portfolio/") || window.location.pathname.endsWith("index.html")) && 
              (link.href.endsWith("portfolio") || link.href.endsWith("portfolio/") || link.href.indexOf("index.html") !== -1)) || 
            (!(window.location.pathname.endsWith("portfolio") || window.location.pathname.endsWith("portfolio/")) && 
              link.href.indexOf(window.location.pathname) !== -1))
       .forEach(link => link.classList.add("active"));
});
