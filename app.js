//glightbox
const lightbox = GLightbox({
  href: 'https://www.youtube.com/watch?v=rgF9pNph-f4',
  type: 'video',
  source: 'youtube', //vimeo, youtube or local
  width: 900,
  autoPlayVideos: 'true',
});

//year
const year = document.querySelector('.full-year');
const actualYear = new Date();
year.innerHTML = actualYear.getFullYear();
