import React from 'react'

function Category(props) {
  const {setCategory, setShowTab} = props;

  const categories = ['scary', 'graffity']
  return (
    <div className='categoryContainer'>
      {categories.map((category) => {
        return (
          <div className='category' onClick={()=>{setCategory(category);setShowTab('game')}}>
            <div className='category__background'></div>
            <h2>{category}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default Category
