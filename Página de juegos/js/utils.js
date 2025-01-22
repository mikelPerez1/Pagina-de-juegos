

const scrollContainer = document.querySelector('.horizontal-scroll');
console.log(scrollContainer);
scrollContainer.addEventListener('mousedown', (e) => {
    scrollContainer.isDown = true;
    scrollContainer.startX = e.pageX - scrollContainer.offsetLeft;
    scrollContainer.scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    scrollContainer.isDown = false;
});

scrollContainer.addEventListener('mouseup', () => {
    scrollContainer.isDown = false;
});
scrollContainer.addEventListener('mousemove', (e) => {
    if (!scrollContainer.isDown)
        return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - scrollContainer.startX) * 3;
    // Ajusta la velocidad del desplazamiento scrollContainer.scrollLeft = scrollContainer.scrollLeft - walk; 
});