document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    const updateMainImage = (index) => {
        mainImage.src = thumbnails[index].src;
        currentIndex = index;
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateMainImage(index);
        });
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1;
        updateMainImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1;
        updateMainImage(currentIndex);
    });

    updateMainImage(currentIndex);  // Initialize with the first image
});
