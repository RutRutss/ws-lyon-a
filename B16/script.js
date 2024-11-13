const sectors = [
  { color: "#f82" },
  { color: "#0bf" },
  { color: "#fb0" },
  { color: "#0fb" },
  { color: "#b0f" },
  { color: "#f0b" },
  { color: "#bf0" },
  { color: "#ff6347" }, // สีใหม่ 1
  { color: "#adff2f" }, // สีใหม่ 2
  { color: "#ff1493" }, // สีใหม่ 3
  { color: "#ff8c00" }, // สีใหม่ 4
  { color: "#32cd32" }, // สีใหม่ 5
  { color: "#8a2be2" }, // สีใหม่ 6
];

const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const spinEl = document.querySelector("#spin");
const ctx = document.querySelector("#wheel").getContext("2d");
const dia = ctx.canvas.width;
const rad = dia / 2;
const padding = 10;  // กำหนด padding
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0; // Angular velocity
let ang = 0; // Angle in radians

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
  const ang = arc * i;
  ctx.save();
  // COLOR
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad - padding, ang, ang + arc); // ใช้ rad - padding แทนที่ rad
  ctx.lineTo(rad, rad);
  ctx.fill();
  ctx.restore();
}

function drawCircleBorder() {
  // วาดขอบรอบวงกลม
  ctx.beginPath();
  ctx.strokeStyle = "black"; // สีขอบเป็นสีดำ
  ctx.lineWidth = 3; // ความหนาของขอบ
  ctx.arc(rad, rad, rad - padding, 0, TAU); // วาดวงกลมใช้ radius ลดลงจาก padding
  ctx.stroke(); // วาดขอบ
}

function rotate() {
  const sector = sectors[getIndex()];
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
}

function frame() {
  if (!angVel) return;
  angVel *= friction; // Decrement velocity by friction
  if (angVel < 0.002) angVel = 0; // Bring to stop
  ang += angVel; // Update angle
  ang %= TAU; // Normalize angle
  rotate();
}

function engine() {
  frame();
  requestAnimationFrame(engine);
}

function init() {
  sectors.forEach(drawSector);
  drawCircleBorder(); // วาดขอบวงกลมหลังจากวาดส่วนวงล้อเสร็จ
  rotate(); // Initial rotation
  engine(); // Start engine
  spinEl.addEventListener("click", () => {
    if (!angVel) angVel = rand(0.25, 0.45);
  });
}

init();
