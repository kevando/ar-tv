
// screen.orientation.addEventListener("change", function(e) {
//     // Do something on change
// });

const invisibleOverlayBtn = document.getElementById('OverlayBtn');

if (invisibleOverlayBtn) {
    invisibleOverlayBtn.addEventListener('pointerdown', (event) => {
        console.log('Pointer down event');

        invisibleOverlayBtn.classList.add("pointing-down");
    });


    invisibleOverlayBtn.addEventListener('pointerup', (event) => {


        invisibleOverlayBtn.classList.remove("pointing-down");
    });
}


window.onload = function () {
    const myIframe = document.querySelector("#twitch-embed iframe");

    myIframe.addEventListener("load", function (e) {
        alert('yo')
    })


}
