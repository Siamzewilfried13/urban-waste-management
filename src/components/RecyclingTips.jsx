// RecyclingTips.jsx
import React, { useState } from "react";
import { Search, Recycle, ChevronDown, ChevronUp } from "lucide-react";

const RecyclingGuidelines = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const recyclingData = {
    plastic: {
      title: "Plastics",
      icon: "♳",
      acceptable: [
        "PET bottles (water, soda bottles)",
        "HDPE containers (milk jugs, shampoo bottles)",
        "Plastic containers numbered 1-7",
        "Clean plastic food containers",
      ],
      unacceptable: [
        "Plastic bags",
        "Styrofoam",
        "Plastic wrap",
        "Dirty food containers",
      ],
      tips: [
        "Rinse containers before recycling",
        "Remove all caps and lids",
        "Flatten bottles to save space",
        "Check for recycling numbers on bottom",
      ],
    },
    paper: {
      title: "Paper & Cardboard",
      icon: "📄",
      acceptable: [
        "Newspapers and magazines",
        "Office paper",
        "Cardboard boxes",
        "Paper bags",
        "Mail and envelopes",
      ],
      unacceptable: [
        "Greasy or food-stained paper",
        "Wax-coated paper",
        "Used paper towels",
        "Tissue paper",
      ],
      tips: [
        "Remove staples and paper clips",
        "Break down cardboard boxes",
        "Keep paper dry and clean",
        "Shred sensitive documents",
      ],
    },
    glass: {
      title: "Glass",
      icon: "🔍",
      acceptable: [
        "Glass bottles (all colors)",
        "Glass jars",
        "Glass containers",
      ],
      unacceptable: [
        "Window glass",
        "Mirrors",
        "Light bulbs",
        "Ceramics",
        "Drinking glasses",
      ],
      tips: [
        "Rinse containers thoroughly",
        "Remove lids and caps",
        "Sort by color if required",
        "Don't break glass intentionally",
      ],
    },
    metal: {
      title: "Metal",
      icon: "🥫",
      acceptable: [
        "Aluminum cans",
        "Steel cans",
        "Clean foil",
        "Metal bottle caps",
      ],
      unacceptable: [
        "Paint cans",
        "Aerosol cans",
        "Scrap metal",
        "Electronics",
      ],
      tips: [
        "Rinse all containers",
        "Crush cans to save space",
        "Remove paper labels if possible",
        "Clean foil before recycling",
      ],
    },
  };

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  const filteredCategories = Object.entries(recyclingData).filter(([key, data]) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      data.title.toLowerCase().includes(searchLower) ||
      data.acceptable.some((item) => item.toLowerCase().includes(searchLower)) ||
      data.unacceptable.some((item) => item.toLowerCase().includes(searchLower)) ||
      data.tips.some((tip) => tip.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Recycling Guidelines
      </h1>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search recycling guidelines..."
          className="w-full px-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Important Notice */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-blue-700">
          Always clean and dry items before recycling. Check with your local recycling center for specific guidelines.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {filteredCategories.map(([key, data]) => (
          <div
            key={key}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            <div
              className="cursor-pointer bg-white p-4 flex justify-between items-center"
              onClick={() => toggleCategory(key)}
            >
              <div className="flex items-center gap-2 font-bold">
                <span className="text-2xl">{data.icon}</span>
                {data.title}
              </div>
              {expandedCategory === key ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expandedCategory === key && (
              <div className="p-4 bg-gray-50">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-bold text-green-600 mb-2">
                      Acceptable Items
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      {data.acceptable.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-red-600 mb-2">Not Acceptable</h3>
                    <ul className="list-disc pl-4 space-y-1">
                      {data.unacceptable.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-blue-600 mb-2">
                      Recycling Tips
                    </h3>
                    <ul className="list-disc pl-4 space-y-1">
                      {data.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecyclingGuidelines;