import React from 'react';
import RatingButtonOff from './rating-button-off';
import RatingButtonOn from './rating-button-on';

function RatingsBar() {
  const [ratingSelected, setRatingSelected] = React.useState();
  const ratings = [1, 2, 3, 4, 5];
  const lines = [1, 2, 3, 4]

  const isRatingSelected = (id) => {
    return id <= ratingSelected ? true : false
  }

  const isLineSelected = (id) => {
    return id <= ratingSelected ? true : false
  }

  return (
    <div className='Rating-bar-container'>
      <div className='Rating-button-container'>
        {ratings.map((rating, id) => (
          isRatingSelected(id) ? <RatingButtonOn number={rating} onClick={() => setRatingSelected(id)} /> :
            <RatingButtonOff number={rating} onClick={() => setRatingSelected(id)} />
        ))}
      </div>
      <div className='Rating-line-container'>
        {lines.map((line) => (
          isLineSelected(line) ? <div className='Line-on' /> : <div className='Line-off' />
        ))}
      </div>
    </div>
  )
}

export default RatingsBar;