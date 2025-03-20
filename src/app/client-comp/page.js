'use client'
import Card from '@/components/Card';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
// import useSWR from 'swr';
import { BarLoader } from 'react-spinners';
// const fetcher = (...args) => fetch(...args).then(res => res.json())
// async
 function page() {
  // const { data, isLoading } = useSWR(`https://dummyjson.com/recipes`, fetcher)
  // const data = await fetch() 
  // console.log(data?.recipes);
  const [recipes, setRecipes] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    setLoading(true);
    let response = await fetch('https://dummyjson.com/recipes');
    let res = await response.json();
    
    console.log(res.recipes);
    setRecipes(res.recipes);
    setLoading(false);
  }

  if (Loading) {
    return (
      <div className='bg-blue-950 flex items-center justify-center h-screen'>
       <BarLoader />
      </div>
    );
  }

  return (
    <div className='bg-blue-900 text-white px-20 py-9'>
    <div className='mb-4'>
      <h1 className='text-2xl font-bold'>Recipes by Client Component</h1>
      <Link href={'/'}><h1 className='text-lg'>Go to homepage</h1></Link>
    </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  </div>
  );
}

export default page;
