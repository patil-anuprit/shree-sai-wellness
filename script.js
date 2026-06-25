console.log("Shree Sai Wellness Loaded Successfully");
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => {
        console.log("Service Worker Registered");
      })
      .catch(error => {
        console.log("Service Worker Error:", error);
      });
  });
}
window.addEventListener("load", () => {

setTimeout(() => {

const splash = document.getElementById("splash-screen");

if(splash){
splash.style.opacity = "0";

setTimeout(() => {
splash.style.display = "none";
},800);

}

},1500);

});
