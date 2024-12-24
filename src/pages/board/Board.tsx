import Search from 'features/image/controllers/search'
import Seo from 'shared/ui/seo'

function Board() {
  return (
    <Seo pageLabel="image" pageTitle="board title">
      <Search />
    </Seo>
  )
}

export default Board
