import blueBanner from '../../../assets/img/product/blue_banner.png'

interface ISlide {
  id: string
  background_image: string
  background: string
}
export const slides: ISlide[] = [
  {
    "id": "1",
    "background_image": blueBanner,
    "background": "rgb(145, 139, 228)"
  },
  {
    "id": "2",
    "background_image": "url(\"public/yellow_banner.png\")",
    "background": "rgb(244, 152, 148)"
  },
  {
    "id": "3",
    "background_image": "url(\"public/black_banner.png\")",
    "background": "rgb(54, 54, 62)"
  }
]