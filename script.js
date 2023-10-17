const memeForm = document.getElementById('meme-form');
const topTextInput = document.getElementById('top-text-input');
const bottomTextInput = document.getElementById('bottom-text-input');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const memeImage = document.getElementById('meme-image');
const imageInput = document.getElementById('image-input');
const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const textColorInput = document.getElementById('text-color-input');
const textFontInput = document.getElementById('text-font-input');


memeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    topText.textContent = topTextInput.value;
    bottomText.textContent = bottomTextInput.value;
    memeImage.style.width = `${widthInput.value}px`;
    memeImage.style.height = `${heightInput.value}px`;
    topText.style.color = textColorInput.value;
    bottomText.style.color = textColorInput.value;
    topText.style.fontFamily = textFontInput.value;
    bottomText.style.fontFamily = textFontInput.value;
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
