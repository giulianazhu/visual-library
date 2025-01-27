import { useDelete } from 'features/image/hooks/useDelete'
import { useStar } from 'features/image/hooks/useStar'
import ImageListItem from 'features/image/ui/image-list-item'
import useToast from 'shared/hooks/useToast'

interface EditItemProps {
  image: any
}

function EditItem({ image }: EditItemProps) {
  const { mutateAsync: mutatePatch, isPending: isStarring } = useStar(image.id)
  const { showError, contextHolder } = useToast()

  const handleStar = async () => {
    // change star to fill or empty
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

  return (
    <>
      {contextHolder}
      <ImageListItem image={image} onStar={handleStar} />
    </>
  )
}

export default EditItem
