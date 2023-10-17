const memeForm = document.getElementById('meme-form');
const topTextInput = document.getElementById('top-text-input');
const bottomTextInput = document.getElementById('bottom-text-input');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const memeImage = document.getElementById('meme-image');
const imageInput = document.getElementById('image-input');

memeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    topText.textContent = topTextInput.value;
    bottomText.textContent = bottomTextInput.value;
});

imageInput.addEventListener('change', function () {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            memeImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
