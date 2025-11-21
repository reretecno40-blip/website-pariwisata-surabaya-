let index = 0;

function show() {
    const slider = document.getElementById("carousel");
    const items = slider.querySelectorAll("img");
    const itemWidth = items[0].clientWidth + 20; // gambar + gap

    slider.style.transform = `translateX(calc(50% - ${(index + 0.5) * itemWidth}px))`;
}

function move(direction) {
    const items = document.querySelectorAll("#carousel img").length;
    
    index = index + direction;

    if (index < 0) index = 0;
    if (index > items - 1) index = items - 1;

    show();
}

show();
