import routes from 'core/configs/routes'
import { useConfigurePractice } from 'features/practice/store/practice'
import PracticeShuffler from 'features/practice/ui/practice-shuffler'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ApiPracticeImage } from 'types/api/practice'
import { PracticeStatus, RoutePath } from 'types/enums'

interface StartProps {
  images: ApiPracticeImage[]
}
function Start({ images }: StartProps) {
  const settings = useConfigurePractice((state) => state.settings)
  const navigate = useNavigate()

  useEffect(() => {
    if (images.length === 0) {
      navigate(routes.practiceStatus.url.replace(RoutePath.Status, PracticeStatus.Settings))
    }
  }, [images, navigate])

  return <PracticeShuffler settings={settings} images={images} />
}

export default Start
