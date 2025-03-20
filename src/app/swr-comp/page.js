'use client';
import Card from '@/components/Card';
import React from 'react';
import useSWR from 'swr';
import { BarLoader } from 'react-spinners';
import Link from 'next/link'; // Ensure Link is imported correctly

const fetcher = (...args) => fetch(...args).then(res => res.json());

function page() {
  const { data, isLoading } = useSWR(`https://dummyjson.com/recipes`, fetcher);

  if (isLoading) {
    return (
      <div className='bg-blue-950 flex items-center justify-center h-screen'>
        <BarLoader />
      </div>
    );
  }

  const recipes = data?.recipes || []; // Ensure recipes is defined to avoid errors

  return (
    <div className='bg-blue-900 text-white px-20 py-9'>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>Recipes by SWR Component</h1>
        <Link href={'/'}>
          <h1 className='text-lg'>Go to homepage</h1>
        </Link>
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
