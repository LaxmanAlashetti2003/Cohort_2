let sel = document.querySelector("select");
let device = document.querySelector("h3");
sel.addEventListener("change", function(dets) {
device.textContent = `You have selected ${dets.target.value} device`;})

