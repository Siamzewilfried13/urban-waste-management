import React from 'react';

const RecyclingTips = ({ tips }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">Recycling Tips</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="font-semibold">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
              <span className="text-sm text-blue-500">{tip.category}</span>
            </div>
          ))}

        </div>
      </div>
      <div className='  border-gray-200 rounded-lg p-4 mb-4  gap-3 flex grid-cols-2'>
        <div className=' bg-green-300 hover:bg-slate-500 w-full rounded hover:translate-y-3 duration-200 ' >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet illum est ducimus voluptatum dolor voluptatibus quos quam fugiat tempore voluptas eaque enim ullam, excepturi odit aperiam eos dolorem deleniti ipsam.
        </div>
        <div className=' bg-green-300 hover:bg-slate-500 w-full rounded hover:translate-y-3 duration-200'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eius numquam animi eum at sint officiis ratione illo iure necessitatibus natus, accusamus quis doloremque minus, in ipsa? In, optio laboriosam!

        </div>

      </div>
      <div className="  border-gray-200 rounded-lg p-4 mb-4  gap-3 flex grid-cols-2">
        <div className='bg-yellow-300 hover:bg-slate-500 w-full rounded hover:translate-y-3 duration-200'>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id ratione itaque sequi magnam similique perspiciatis accusantium, quis doloremque. Ducimus fugit impedit, distinctio illum autem nam accusamus delectus! Velit, quae!
        </div>
        <div className="bg-yellow-300 hover:bg-slate-500 w-full rounded hover:translate-y-3 duration-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis fugit eius distinctio, dolor nemo, impedit harum aut odit labore perferendis non. Eos nostrum iure numquam et placeat officiis? Sed!</div>
      </div>
    </>
  );
};

export default RecyclingTips;
