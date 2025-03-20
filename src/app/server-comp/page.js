import Card from '@/components/Card';
import Link from 'next/link';

async function Page() {
  // Fetch data on the server
  const response = await fetch('https://dummyjson.com/recipes');
  const res = await response.json();
  const recipes = res.recipes;

  return (
    <div className='bg-blue-900 text-white px-20 py-9'>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>Recipes by Server Component</h1>
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

export default Page;
