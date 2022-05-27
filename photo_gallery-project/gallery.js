const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const galleryImgs = document.querySelectorAll('.gallery-img')
let currentlySelectedImg = 0

prevBtn.addEventListener("click", function() {
    galleryImgs[currentlySelectedImg].classList.remove("active")
    currentlySelectedImg--
    galleryImgs[currentlySelectedImg].classList.add("active")
    
    nextBtn.disabled = false

    if(currentlySelectedImg === 0) {
        prevBtn.disabled = true
    }
})

nextBtn.addEventListener("click", function() {
    prevBtn.disabled = false
    
    galleryImgs[currentlySelectedImg].classList.remove("active")
    currentlySelectedImg++
    galleryImgs[currentlySelectedImg].classList.add("active")

    if(galleryImgs.length === currentlySelectedImg + 1) {
        nextBtn.disabled = true
    }
})