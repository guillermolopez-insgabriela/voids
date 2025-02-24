console.debug("Loaded canvas.js")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


if (!(canvas.getContext)) {
    alert('This browser is not supported');
}