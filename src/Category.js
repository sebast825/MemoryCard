import React from 'react'

function Category() {
  const categories = ['scary', 'forest']
  return (
    <div className='categoryContainer'>
      {categories.map((category) => {
        return (
          <div className='category'>
            <div className='category__background'></div>
            <h2>{category}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default Category
