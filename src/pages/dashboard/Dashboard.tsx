import Seo from 'shared/ui/seo'
import SearchDelete from 'features/board/controllers/search-delete'

function Dashboard() {
  return (
    <Seo pageLabel="dashboard.dashboard">
      <div className="page">
        <SearchDelete />
      </div>
    </Seo>
  )
}

export default Dashboard
