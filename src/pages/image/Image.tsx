import Load from 'features/image/controllers/load'
import Seo from 'shared/ui/seo'

function Image() {
  return (
    <Seo pageLabel="image" pageTitle="image title">
      <div>
        <Load />
      </div>
    </Seo>
  )
}

export default Image
