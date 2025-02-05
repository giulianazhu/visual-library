import useLoad from 'features/image/hooks/useLoad'
import useLoadPrefetch from 'features/image/hooks/useLoadPrefetch'
import { useStar } from 'features/image/hooks/useStar'
import Detail from 'features/image/ui/detail'
import ImageScroller from 'features/image/ui/image-scroller'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import useToast from 'shared/hooks/useToast'
import Seo from 'shared/ui/seo'

function Image() {
  const { t } = useTranslation()
  const id = parseInt(useParams().subId!)
  const { isPending, data: image } = useLoad(id)
  const { isPending: isLoadPrefetching, data: scrollerImages } = useLoadPrefetch(id)
  const title = isPending ? t('general.loading') : image?.title
  const { mutateAsync: mutatePatch } = useStar(image?.id ?? 0)
  const { showError } = useToast()

  const handleStar = async () => {
    try {
      const res = await mutatePatch()
      if (res.error) {
        throw new Error('error')
      }
    } catch (error) {
      if (error instanceof Error) showError()
    }
  }

  return (
    <Seo pageLabel="image" pageTitle={title}>
      <div>
        {<Detail image={image} onStar={handleStar} />}
        <ImageScroller images={scrollerImages} isLoading={isLoadPrefetching} />
      </div>
    </Seo>
  )
}

export default Image
