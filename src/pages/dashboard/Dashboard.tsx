import Seo from 'shared/ui/seo'
import Search from 'features/board/controllers/search'

function Dashboard() {
  return (
    <Seo pageLabel="dashboard.dashboard">
      <Search />
    </Seo>
  )
}

export default Dashboard
