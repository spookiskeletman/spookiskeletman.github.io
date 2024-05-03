function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function prevImage() {
    var modalImg = document.getElementById("modalImg");
    var currentIndex = getCurrentIndex(modalImg.src);
    var prevIndex = currentIndex - 1;
    var prevImgSrc = getImgSrc(prevIndex);
    modalImg.src = prevImgSrc;
}

function nextImage() {
    var modalImg = document.getElementById("modalImg");
    var currentIndex = getCurrentIndex(modalImg.src);
    var nextIndex = currentIndex + 1;
    var nextImgSrc = getImgSrc(nextIndex);
    modalImg.src = nextImgSrc;
}

function getCurrentIndex(src) {
    var images = document.querySelectorAll(".image img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].src === src) {
            return i;
        }
    }
}

function getImgSrc(index) {
    var images = document.querySelectorAll(".image img");
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    return images[index].src;
}

function fadeElementInOnScroll(selector) {
    window.addEventListener('scroll', function() {
        var element = document.querySelector(selector);
        var elementPosition = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;

        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll("#gallery ul li");
    const galleryItems = document.querySelectorAll(".gallery .grid-wrapper .image");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            galleryItems.forEach(function (item) {
                if (filterValue === "*" || item.classList.contains(filterValue.replace('.', ''))) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll("#gallery ul li");
    const galleryItems = document.querySelectorAll(".gallery .grid-wrapper .image");
    const ghostsBox = document.querySelector(".ghostbox.ghosts");

    ghostsBox.style.display = "none";

    function toggleGhostsBox(filterValue) {
        ghostsBox.style.display = filterValue === ".ghosts" ? "block" : "none";
    }

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            galleryItems.forEach(function (item) {
                if (filterValue === "*" || item.classList.contains(filterValue.replace('.', ''))) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            toggleGhostsBox(filterValue);
        });
    });
});

// Fade in animations on scroll
fadeElementInOnScroll('.contactbox');
fadeElementInOnScroll('.about-box');
fadeElementInOnScroll('.about-img');
