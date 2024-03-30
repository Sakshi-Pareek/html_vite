import './style.css'

document.querySelector('#app').innerHTML = `
<div class="text-white py-3 text-center fw-bold heading">Swiper Slider In Html Vite</div>
<swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #22a6c1; --swiper-pagination-bullet-inactive-opacity:1;--swiper-pagination-bullet-inactive-color:#ffffff;" class="mySwiper"
speed="600" parallax="true" pagination="true" pagination-clickable="true" navigation="true">
<div slot="container-start"></div>

<swiper-slide class="min-vh-50 text-center">
  <div class="title">Slide 1</div>
  <div class="subtitle">Subtitle</div>
  <div class="text mx-auto">
    <p class="text-center pt-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
      laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
      Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
      Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
      ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
      tincidunt ut libero. Aenean feugiat non eros quis feugiat.
    </p>
  </div>
</swiper-slide>
<swiper-slide class="min-vh-50 text-center">
  <div class="title">Slide 2</div>
  <div class="subtitle">Subtitle</div>
  <div class="text mx-auto">
    <p class="text-center pt-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
      laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
      Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
      Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
      ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
      tincidunt ut libero. Aenean feugiat non eros quis feugiat.
    </p>
  </div>
</swiper-slide>
<swiper-slide class="min-vh-50 text-center">
  <div class="title">Slide 3</div>
  <div class="subtitle">Subtitle</div>
  <div class="text mx-auto">
    <p class="text-center pt-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
      laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
      Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
      Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
      ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
      tincidunt ut libero. Aenean feugiat non eros quis feugiat.
    </p>
  </div>
</swiper-slide>
</swiper-container>
`

setupCounter(document.querySelector('#counter'))
