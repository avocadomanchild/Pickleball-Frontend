import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose what you want to play!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='PPhotos/image-4.jpg'
              text='Ascend the Ladder and Claim the Top Spot.'
              label='Ladders'
              path='/services'
            />
            <CardItem
              src='PPhotos/image-5.jpg'
              text='Find a thrilling league nearby and form new Freindships '
              label='Leauges'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='PPhotos/image-3.jpg'
              text='      Unleash your skills and compete to become the ultimate champion  '
              label='Tournaments'
              path='/services'
            />
            <CardItem
              src='PPhotos/image-2.jfif'
              text='Find a Hitting Partner Today'
              label='Matching'
              path='/products'
            />
            <CardItem
              src='PPhotos/image-1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
