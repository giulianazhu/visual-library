import SearchDelete from 'features/image/controllers/search-delete'

import Seo from 'shared/ui/seo'

function Board() {
  return (
    <Seo pageLabel="image" pageTitle="board title">
      <div className="page">
        <SearchDelete />
      </div>
    </Seo>
  )
}

export default Board
