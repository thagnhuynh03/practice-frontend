import { Divider } from 'antd';
import Image from 'next/image';

export default function RecipePage() {
  return (
    <div className='pb-10 bg-white text-black dark:bg-white dark:text-black'>
      <div className='sm:p-10'>
      <Image
        src="/images/recipes/image-omelette.jpeg"
        alt='Pictures'
        width={1440}
        height={300}
        className='object-cover h-auto sm:rounded-lg'
      />
      </div>
      <div className='m-10 text-base'>
        <p className='font-normal text-4xl sm:text-6xl font-serif mb-5'>Simple Omelette Recipe</p>
        <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection,
        optionally filled with your choice of cheese, vegetables, or meats.</p>
        <div className='bg-[#fff5fa] mt-5 p-5 rounded-lg'>
          <p className='font-bold text-xl text-rose-800 mb-2'>Preparation time</p>
          <ul className="list-disc list-inside space-y-2">
            <li><span className='font-bold text-stone-600'>Total:</span> Approximately 10 minutes</li>
            <li><span className='font-bold text-stone-600'>Preparation:</span> 5 minutes</li>
            <li><span className='font-bold text-stone-600'>Cooking:</span> 5 minutes</li>
          </ul>
        </div>
        <div className='my-5'>
          <p className='text-amber-700 font-serif font-bold text-3xl mb-4'>Ingredients</p>
          <ul className='list-disc list-inside space-y-1'>
            <li>2–3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <Divider className='!border-t-stone-300'/>
        <div className='my-5'>
          <p className='text-amber-700 font-serif font-bold text-3xl mb-4'>Instrustions</p>
          <ol className="list-decimal list-inside space-y-2">
            <li><span className="font-bold text-stone-600">Beat the eggs:</span> In a bowl, beat the eggs with salt and pepper until well mixed. Add water or milk if desired.</li>
            <li><span className="font-bold text-stone-600">Heat the pan:</span> Use a non-stick pan over medium heat and add butter or oil.</li>
            <li><span className="font-bold text-stone-600">Cook the omelette:</span> Pour in the eggs and tilt the pan to spread them evenly.</li>
            <li><span className="font-bold text-stone-600">Add fillings (optional):</span> Add your choice of fillings before the eggs are fully set.</li>
            <li><span className="font-bold text-stone-600">Fold and serve:</span> Fold the omelette in half and transfer to a plate.</li>
            <li><span className="font-bold text-stone-600">Enjoy:</span> Serve hot with extra seasoning if desired.</li>
          </ol>
        </div>
        <Divider className='!border-t-stone-300'/>
        <div className='mt-5'>
          <p className='text-amber-700 font-serif font-bold text-3xl mb-4'>Nutrition</p>
          <p className="mb-2 text-sm">The table below shows nutritional values per serving without the additional fillings.</p>
          <div className='grid grid-cols-2'>
            <div className='border-b border-stone-300 pl-7 py-2'>Calories</div>
            <div className='border-b border-stone-300 text-amber-700 font-bold py-2'>277kcal</div>
            <div className='border-b border-stone-300 pl-7 py-2'>Carbs</div>
            <div className='border-b border-stone-300 text-amber-700 font-bold py-2'>0g</div>
            <div className='border-b border-stone-300 pl-7 py-2'>Protenin</div>
            <div className='border-b border-stone-300 text-amber-700 font-bold py-2'>20g</div>
            <div className='pl-7 py-2'>Fat</div>
            <div className='text-amber-700 font-bold py-2'>22g</div>
          </div>
        </div>
      </div>
    </div>
  );
}
