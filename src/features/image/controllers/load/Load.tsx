import Detail from 'features/image/ui/detail'

function Load() {
  // load image query

  const image = {
    boardId: [1, 2, 3],
    title: 'Image title',
    description:
      'Description Lorem ipsum dolor consectetur adipisicing elit. Exercitationem ess dolores totam! Deserunt',
    tags: ['Hello'],
    notes:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?',
    src: '/src/assets/images/image1.jpg',
  }
  return <Detail image={image} />
}

export default Load
