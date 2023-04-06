import React from 'react';
import graffity from './photos/graffity.jpg';
import scary from './photos/scary.jpg';

function Category(props) {
  const { setCategory, setShowTab } = props;

  const categories = ['scary', 'art', 'animals'];

  //use the imported images
  const backgroundImageStyles = {
    scary: graffity,
    art: scary

  };

  function instructionPopUp() {
    alert("Once the category is selected, click on each photo to pass the level.\nBe careful not to click the same photo twice!");
  }
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
          /*
          add to category bg to add a bg photo acording to category
                        style={bgPhoto}

          */
          return (
            <div
              key={category}
              className='category'
              onClick={() => {
                setCategory(category);
                setShowTab('game');
              }}
            >


              <div className='category__background' >

              </div>
              <h2>{category}</h2>
            </div>
          );
        })}
      </div>
      <div className='instructions'>
        <h2 onClick={() => { instructionPopUp() }}>Instructions</h2>
      </div>
      <footer>
        <p>Photos provided by <a href='https://unsplash.com/es' target='_blank'>Unsplash</a></p>
        </footer>
    </div>
  );
}

export default Category;
