import Configure from 'features/practice/controllers/configure'
import Start from 'features/practice/controllers/start'
import { useState } from 'react'
import { useParams } from 'react-router'
import Seo from 'shared/ui/seo'
import { ApiPracticeImage } from 'types/api/practice'
import { PracticeStatus } from 'types/enums'

function Practice() {
  const status = useParams().status
  const [images, setImages] = useState<ApiPracticeImage[]>([])

  return (
    <Seo pageLabel="practice.practice">
      {status === PracticeStatus.Settings && (
        <div className="page">
          <Configure setImages={setImages} />
        </div>
      )}
      {status === PracticeStatus.Start && <Start images={images} />}
    </Seo>
  )
}

export default Practice
