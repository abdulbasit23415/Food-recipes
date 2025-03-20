"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

function DetailPage() {
  const params = useParams();
  const router = useRouter(); // Use the router to navigate back
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    async function getdata() {
      try {
        let response = await fetch('https://dummyjson.com/recipes/' + params.id);
        let res = await response.json();
        setRecipes(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    }

    getdata();
  }, [params.id]); // Dependency array ensures the effect runs when `params.id` changes.

  return (
    <div className='bg-blue-950 min-h-screen'>
      <h1 className='mx-14 cursor-pointer text-white' onClick={() => router.back()}>
        Go Back
      </h1>
      {recipes.image && (
        <img src={recipes.image} className='h-[350px] w-full px-14 py-7' alt={recipes.name} />
      )}
      <div>
        <h1 className='text-2xl font-bold text-white mx-14'>
          {recipes.name}
        </h1>
        <h1 className='text-lg text-white mx-14'>
          {recipes.cuisine}
        </h1>
        <div className='text-lg text-white mx-14 pt-10'>
          <h2 className='font-bold'>Ingredients:</h2>
          <ul className="list-disc ml-5">
            {recipes.ingredients && recipes.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='text-lg text-white  mx-14 pt-10'>
          <h2 className='font-bold'>Instructions:</h2>
          <ul className="space-y-1 mx-14">
            {recipes.instructions && recipes.instructions.map((step, index) => (
              <li key={index} className="leading-relaxed">{step}</li>
            ))}
          </ul>
        </div>
      </div>
      <a href={'/recipes/' + params.id} className="text-white underline mx-14">
        Go to Recipe
      </a>
    </div>
  );
}

export default DetailPage;
