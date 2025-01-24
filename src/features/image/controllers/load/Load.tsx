import Detail from 'features/image/ui/detail'
import ImageScroller from 'features/image/ui/image-scroller'

function Load() {
  // load image query

  const image = {
    boardId: [1, 2, 3],
    title: 'Image title',
    description:
      'Description Lorem ipsum dolor consectetur adipisicing elit. Exercitationem ess dolores totam! Deserunt',
    tags: ['Hello'],
    notes:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse dolores totam! Deserunt, ipsum officiis rem, vel delectus porro ducimus, corrupti eum consectetur saepe eaque odio. Minus laboru explicabo pariatur?',
    src: '/src/assets/images/image1.jpg',
  }

  const images = [
    { id: 1, src: '/src/assets/images/image1.jpg' },
    { id: 2, src: '/src/assets/images/image2.jpg' },
    { id: 3, src: '/src/assets/images/image3.jpg' },
    { id: 4, src: '/src/assets/images/cameleon.jpg' },
    { id: 5, src: '/src/assets/images/image1.jpg' },
    { id: 6, src: '/src/assets/images/image2.jpg' },
    { id: 7, src: '/src/assets/images/image3.jpg' },
    { id: 8, src: '/src/assets/images/cameleon.jpg' },
    { id: 9, src: '/src/assets/images/image1.jpg' },
    { id: 10, src: '/src/assets/images/image2.jpg' },
    { id: 11, src: '/src/assets/images/image3.jpg' },
    { id: 12, src: '/src/assets/images/cameleon.jpg' },
    { id: 13, src: '/src/assets/images/image1.jpg' },
    { id: 14, src: '/src/assets/images/image2.jpg' },
    { id: 15, src: '/src/assets/images/image3.jpg' },
    { id: 16, src: '/src/assets/images/cameleon.jpg' },
    { id: 17, src: '/src/assets/images/image1.jpg' },
    { id: 18, src: '/src/assets/images/image2.jpg' },
    { id: 19, src: '/src/assets/images/image3.jpg' },
    { id: 20, src: '/src/assets/images/cameleon.jpg' },
  ]

  return (
    <div>
      <Detail image={image} />
      <ImageScroller images={images} />
    </div>
  )
}

export default Load
