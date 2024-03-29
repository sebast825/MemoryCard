import React from 'react';
import './category.scss';
import Footer from '../footer/footer';

function Category(props) {
  const { setCategory, setShowTab } = props;

  const categories = ['scary', 'art', 'animals'];

  function instructionPopUp() {
    alert("Once the category is selected, click on all photos to pass the level.\nBe careful not to click the same photo twice!");
  }
  return (
    <div className='menu'>
      <div className='menu__tittle'>
        <h1>Memory Card</h1>
        <h4>Select Category</h4>

      </div>

      <div className='categoryContainer'>
        {categories.map((category) => {

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
      <Footer/>
      <div className='instructions'>
        <h2 onClick={() => { instructionPopUp() }}>Instructions</h2>
      </div>
    
    </div>
  );
}

export default Category;
