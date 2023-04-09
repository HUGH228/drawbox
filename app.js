const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const saveBtn = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5; /* 라인 굵기 */

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function handleSaveClick() {
    const image = canvas.toDataURL("image/png");
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

if (saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}

const link = document.createElement("a");
link.download = "PaintJS[EXPORT]";
link.click();