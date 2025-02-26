const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//---------------------------------------------------

const gallery = document.querySelector('.gallery');

//ADD PHOTOS TO GALLARY
const galleryItemsList = images
    .map(item => {
        const {
            preview = 'https://flowbite.com/docs/images/examples/image-1@2x.jpg', //DEFAULT
            original = 'https://flowbite.com/docs/images/examples/image-1@2x.jpg', 
            description = 'It must be description. But DeepThought is broken and its 42.😀'
            } = item;
        
        return `<li class="gallery-item">
                    <a class="gallery-link" href= ${original}>
                        <img
                        class="gallery-image"
                        src= ${preview}
                        data-source= ${original}
                        alt= ${description}
                        />
                    </a>
                </li>`
    })
    .join('');

gallery.insertAdjacentHTML('afterbegin', galleryItemsList);


//ANIMATION APPEARS 
let galleryItem = document.querySelectorAll('.gallery-image');
galleryItem.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('animation')
    }, (index + 1) * 300) //delay for every item
})


//PREVENT DEFAULT + SHOW MODAL + ESC HIDE MODAL
gallery.addEventListener('click', event => {
    event.preventDefault();
    //show
    if (event.target.tagName !== 'IMG') return;
    let largeImageUrl = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`<img src="${largeImageUrl}" width="1112" height="640">`);
    instance.show();
    //hide
    const hideOnEsc = (event) => {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', hideOnEsc);
        };
    };
    
    document.addEventListener('keydown', hideOnEsc);
});

