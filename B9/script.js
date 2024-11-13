const container = document.querySelector('.image-compare-container');
const afterImage = document.querySelector('.image-after');
const splitter = document.querySelector('.splitter');

let isDragging = false;

splitter.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);

container.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const containerRect = container.getBoundingClientRect();
    let offsetX = e.clientX - containerRect.left;

    // Set boundaries for the splitter
    if (offsetX < 0) offsetX = 0;
    if (offsetX > containerRect.width) offsetX = containerRect.width;

    // Adjust splitter position and after image clip
    splitter.style.left = `${offsetX}px`;
    afterImage.style.clip = `rect(0, ${offsetX}px, 400px, 0)`;
  }
});
