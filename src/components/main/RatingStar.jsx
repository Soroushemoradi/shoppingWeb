import Rating from '@mui/material/Rating';

function RatingStar({defaultValue}) {
  return (
    <>
      <Rating name="half-rating-read" defaultValue={defaultValue} precision={0.5} readOnly />
    </>
  )
}

export default RatingStar