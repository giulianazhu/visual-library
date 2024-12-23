import Seo from 'shared/ui/seo'
import Search from 'features/board/controllers/search'

function Board() {
  return (
    <Seo pageLabel="image" pageTitle="board title">
      <Search />
    </Seo>
  )
}

export default Board
