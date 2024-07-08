const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const gallery = document.querySelector(".gallery"); // Wybieramy ul.gallery
const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const li = document.createElement("li"); // Tworzymy nowy element li
  li.classList.add("gallery-item"); // Dodajemy klasę 'gallery-item'

  const a = document.createElement("a"); // Tworzymy nowy element a
  a.classList.add("gallery-link"); // Dodajemy klasę 'gallery-link'
  a.href = image.original; // Ustawiamy atrybut href na oryginalny obraz

  const img = document.createElement("img"); // Tworzymy nowy element img
  img.classList.add("gallery-image"); // Dodajemy klasę 'gallery-image'
  img.src = image.preview; // Ustawiamy atrybut src na miniaturkę obrazu
  img.alt = image.description; // Ustawiamy atrybut alt na opis obrazu
  img.dataset = image.original;

  a.appendChild(img); // Dodajemy img do a
  li.appendChild(a); // Dodajemy a do li
  fragment.appendChild(li); // Dodajemy li do fragment
});
gallery.appendChild(fragment); // dodajemy całą liste do DOM- taki sposob zwieksza szybkosc, obniza obciążenie

gallery.addEventListener("click", selectImages);
function selectImages(event) {
  event.preventDefault();
  console.log(event.target.getAttribute("image.original"));
}

const instance = basicLightbox.create(`<img src="" width="1280">`, {
  onShow: (instance) => {
    instance.element().querySelector("a").onclick = instance.close;
  },
});

instance.show();
