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
    <div className='menu'>
      <div className='menu__tittle'>
        <h1>Memory Card</h1>
        <h4>Select Category</h4>
      </div>


      <div className='categoryContainer'>
        {categories.map((category) => {

          //use the imported images
          const bgPhoto = {
            backgroundImage: backgroundImageStyles[category]
          }
          return (
            <div
            key={category}
              className='category'
              onClick={() => {
                setCategory(category);
                setShowTab('game');
              }}
              >
                    
                <div className='category__background'style={bgPhoto}>
             
                </div>
                <h2>{category}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
