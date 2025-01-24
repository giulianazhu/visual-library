import Configure from 'features/practice/controllers/configure'
import Start from 'features/practice/controllers/start'
import { useParams } from 'react-router'
import Seo from 'shared/ui/seo'
import { PracticeStatus } from 'types/enums'

function Practice() {
  const status = useParams().status

  return (
    <Seo pageLabel="practice.practice">
      {status === PracticeStatus.Settings && (
        <div className="page">
          <Configure />
        </div>
      )}
      {status === PracticeStatus.Start && <Start />}
    </Seo>
  )
}

export default Practice
