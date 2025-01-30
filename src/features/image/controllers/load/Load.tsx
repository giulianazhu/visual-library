import { Skeleton } from 'antd'
import useLoad from 'features/image/hooks/useLoad'
import { useStar } from 'features/image/hooks/useStar'
import Detail from 'features/image/ui/detail'
import ImageScroller from 'features/image/ui/image-scroller'
import { useParams } from 'react-router'
import useToast from 'shared/hooks/useToast'

const images = [
  { id: 1, src: '/src/assets/images/image1.jpg' },
  { id: 2, src: '/src/assets/images/image2.jpg' },
  { id: 3, src: '/src/assets/images/image3.jpg' },
  { id: 4, src: '/src/assets/images/image4.jpg' },
  { id: 5, src: '/src/assets/images/image1.jpg' },
  { id: 6, src: '/src/assets/images/image2.jpg' },
  { id: 7, src: '/src/assets/images/image3.jpg' },
  { id: 8, src: '/src/assets/images/image4.jpg' },
  { id: 9, src: '/src/assets/images/image1.jpg' },
  { id: 10, src: '/src/assets/images/image2.jpg' },
  { id: 11, src: '/src/assets/images/image3.jpg' },
  { id: 12, src: '/src/assets/images/image4.jpg' },
  { id: 13, src: '/src/assets/images/image1.jpg' },
  { id: 14, src: '/src/assets/images/image2.jpg' },
  { id: 15, src: '/src/assets/images/image3.jpg' },
  { id: 16, src: '/src/assets/images/image4.jpg' },
  { id: 17, src: '/src/assets/images/image1.jpg' },
  { id: 18, src: '/src/assets/images/image2.jpg' },
  { id: 19, src: '/src/assets/images/image3.jpg' },
  { id: 20, src: '/src/assets/images/image4.jpg' },
]

function Load() {
  const id = parseInt(useParams().id!)
  const { isPending, data: image } = useLoad(id)
  const { mutateAsync: mutatePatch } = useStar(image?.id ?? 0)
  const { showError } = useToast()

  const handleStar = async () => {
    try {
      const res = await mutatePatch()
      if (res.error) {
        throw new Error('error')
      }
    } catch (error) {
      if (error instanceof Error) {
        showError()
      }
      console.error('Mutation failed:', error)
    }
  }

  if (isPending) {
    return <Skeleton active />
  }

  return (
    <div>
      {image && <Detail image={image} onStar={handleStar} />}
      <ImageScroller images={images} />
    </div>
  )
}

export default Load
