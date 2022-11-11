---
layout: base
permalink: /qr
title: AR House 24/7 via QR
url: https://arhouse.tv?utm_source=QR_Code
---

<style>
h1 {
    position: absolute;
    text-align:center;
    top: 30vh;
    left: 33%;
    background-color: yellow;
    font-family: Arial;
    font-size: 5rem;
    z-index:1
}
img {

    width: 100%;
    z-index: 100;
    position: absolute;
}
</style>

# AR TV
![qr](/assets/images/QR.png)

<script type="text/javascript">


setTimeout(function() {
window.location.href = "https://arhouse.tv?utm_source=QR_Code";

},1400);





var isVisible = true


document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready


setTimeout(function() {

setInterval(function() {

    document.querySelector('img').style.opacity = isVisible ? 1 : 0;

    isVisible = !isVisible
},50)
},600);


});


    </script>