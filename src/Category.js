import React from 'react';
import graffity from './photos/graffity.jpg';
import scary from './photos/scary.jpg';

function Category(props) {
  const { setCategory, setShowTab } = props;

  const categories = ['scary', 'graffity'];

  //use the imported images
  const backgroundImageStyles = {
    scary: `url(${scary})`,
    graffity: `url(${graffity})`
  };

  return (
    <div className='categoryContainer'>
      {categories.map((category) => {

        //use the imported images
        const bgPhoto = {
          backgroundImage: backgroundImageStyles[category]
        }
        return (
          <div
            className='category'
            onClick={() => {
              setCategory(category);
              setShowTab('game');
            }}
            style={bgPhoto}>
            <h2>{category}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
