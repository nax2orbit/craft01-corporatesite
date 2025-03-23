import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const carousel = document.querySelector('#carouselExampleCaptions')
    const arrows = document.querySelectorAll('.carousel-arrow')

    carousel.addEventListener('slid.bs.carousel', function (event) {
      const index = event.to // 0-based index

      arrows.forEach(arrow => {
        if (index === 0 || index === 1) {
          arrow.classList.add('carousel-arrow-black')
        } else {
          arrow.classList.remove('carousel-arrow-black')
        }
      })
    })

    // 初回スライド位置を強制反映
    const initEvent = new Event('slid.bs.carousel')
    initEvent.to = 0
    carousel.dispatchEvent(initEvent)
  }
}
