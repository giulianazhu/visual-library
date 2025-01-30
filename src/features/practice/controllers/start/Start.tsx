import { useConfigurePractice } from 'features/practice/store/practice'
import PracticeShuffler from 'features/practice/ui/practice-shuffler'
import { useEffect, useState } from 'react'

function Start() {
  const [images, setImages] = useState<string[]>([])

  const settings = useConfigurePractice((state) => state.settings)

  const loadImages = () => {
    const images = [
      '/src/assets/images/image1.jpg',
      '/src/assets/images/image2.jpg',
      '/src/assets/images/image3.jpg',
      '/src/assets/images/image4.jpg',
    ]
    setImages(images)
    // load images based on settings ==> filter by board, tags + sortby + number
  }

  useEffect(() => {
    loadImages()
  }, [])

  return <PracticeShuffler settings={settings} images={images} />
}

export default Start
