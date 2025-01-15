import PracticeForm from 'features/practice/ui/practice-form'
import PracticeShuffler from 'features/practice/ui/practice-shuffler'
import { useParams } from 'react-router'
import Seo from 'shared/ui/seo'
import { PracticeStatus } from 'types/enums'

function Practice() {
  const status = useParams().status

  return (
    <Seo pageLabel="practice.practice">
      {status === PracticeStatus.Settings && <PracticeForm />}
      {status === PracticeStatus.Start && <PracticeShuffler />}
    </Seo>
  )
}

export default Practice
