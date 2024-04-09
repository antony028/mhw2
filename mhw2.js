//funzione che cambia immagine nell'header 

const top_imgs = ["immagini/003.webp","immagini/006.webp","immagini/007.webp"]

function onClick(event){
  const bottone = event.currentTarget;
  var indx = bottone.dataset.index;

  const image = document.querySelector("#immagine-che-scorre");
  image.src = top_imgs[indx-1];

}

const bottoni = document.querySelectorAll("button");
bottoni.forEach(bottone => {
  bottone.addEventListener("click", onClick);
});
















//----------------------
const PHOTO_LIST = [
  "immagini/bt_01.webp",
  "immagini/bt_02.webp",
  "immagini/bt_03.webp",
  "immagini/bt_04.webp",
  "immagini/bt_05.webp",
  "immagini/bt_06.webp"
];

function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.src);
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
}

function onModalClick() {
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}

const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) {
  const photoSrc = PHOTO_LIST[i];
  const image = createImage(photoSrc);
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);


