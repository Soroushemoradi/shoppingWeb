import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function RatingStar() {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)

  }

  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  return (
    <>
     <Rating size={25} className='mb-3'
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </>
  )
}

export default RatingStar