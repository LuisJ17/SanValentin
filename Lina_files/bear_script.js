let leftEye = document.getElementById('left-eye');
let rightEye = document.getElementById('right-eye');
let leftArm = document.getElementById('left-arm');
let rightArm = document.getElementById('right-arm');

function wink() {
    rightEye.style.transform = 'scaleY(0)';
    setTimeout(() => {
        rightEye.style.transform = 'scaleY(1)';
    }, 500);
}

function moveArms() {
    leftArm.style.transform = 'rotate(30deg)';
    rightArm.style.transform = 'rotate(-30deg)';
    setTimeout(() => {
        leftArm.style.transform = 'rotate(0deg)';
        rightArm.style.transform = 'rotate(0deg)';
    }, 500);
}

setInterval(wink, 3000);
setInterval(moveArms, 1000);
