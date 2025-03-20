// 'use client'
// import Card from '@/components/Card';
// import React, { useState, useEffect } from 'react';
// import useSWR from 'swr';
// import { BarLoader } from 'react-spinners';
// const fetcher = (...args) => fetch(...args).then(res => res.json())
// // async 
//   function page() {
//   const { data, isLoading } = useSWR(`https://dummyjson.com/recipes`, fetcher)
//   // const data = await fetch() 
//   console.log(data?.recipes);
//   // const [recipes, setRecipes] = useState([]);
//   // const [Loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   getdata();
//   // }, []);

//   // async function getdata() {
//   //   setLoading(true);
//   //   let response = await fetch('https://dummyjson.com/recipes');
//   //   let res = await response.json();
    
//   //   // console.log(res.recipes);
//   //   setRecipes(res.recipes);
//   //   setLoading(false);
//   // }

//   if (isLoading) {
//     return (
//       <div className='bg-red-600 flex items-center justify-center h-screen'>
//        <BarLoader />
//       </div>
//     );
//   }

//   return (
//     <div className='bg-blue-900 text-white grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20 py-9'>
//       {data.recipes.map((recipe) => (
//         <Card key={recipe.id} recipe={recipe} />
//       ))}
//     </div>
//   );
// }

// export default page;
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='bg-blue-950 min-h-screen flex items-center justify-center '>
      <div className='flex gap-5  '>
        <Link href={'/server-comp'}>
      <div className='bg-white text-black w-[300px] h-[170px] flex items-center text-center rounded-2xl font-bold '>
      <h1>View recipes using NextJs Server Component</h1>
      </div >
      </Link>
      <Link href={'/client-comp'}>
      <div className='bg-white text-black w-[300px] h-[170px] flex items-center text-center rounded-2xl font-bold'>
      <h1>View recipes using NextJs Client Component useEffect Method</h1>
      </div>
      </Link>
      <Link href={'/swr-comp'}>
      <div className='bg-white text-black w-[300px] h-[170px] flex items-center text-center rounded-2xl font-bold'>
      <h1>View recipes using NextJs Server Component SWR Method</h1>
      </div>
      </Link>
      </div>
    </div>
  )
}

export default page


