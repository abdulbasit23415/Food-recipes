import Link from 'next/link';
import React from 'react';

function Card({ recipe }) {
  return (
    <Link href={'/recipes/' + recipe.id} className='bg-white text-black rounded-lg'>
      <img src={recipe.image} className='h-[200px] w-full object-cover' alt={recipe.name} />
      <p className='p-6'>{recipe.name}</p>
      <div className='flex justify-between items-center m-2 p-6'>
      <h1>
        {recipe.rating}
      </h1>
      {/* Print the second item from the tags list */}
      <p>{recipe.tags && recipe.tags[1]}</p>
      </div>
    </Link>
  );
}

export default Card;