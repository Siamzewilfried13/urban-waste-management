import React from 'react';

const RecyclingTips = ({ tips }) => {
  return (
    <>
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Recycling Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="border p-4 rounded">
            <h3 className="font-semibold">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
            <span className="text-sm text-blue-500">{tip.category}</span>
          </div>
        ))}
       
      </div>
    </div>
      <div className='flex gap'>
      <div>
        paper work
      </div>
      <div>
        paper work
      </div>
      <div>
        paper work
      </div>
    </div>
    </>
  );
};

export default RecyclingTips;
