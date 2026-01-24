import React from "react";

const StatCard = ({ title, value, icon, color }) => {
  const colors = {
    sky: "bg-sky-100 text-sky-600 ",
    green: "bg-green-100 text-green-600 ",
    red: "bg-red-100 text-red-600 ",
    pink: "bg-pink-100 text-pink-600 ",
    yellow: "bg-yellow-100 text-yellow-600 ",
    purple: "bg-purple-100 text-purple-600 ",
    orange: "bg-orange-100 text-orange-600 ",
    blue: "bg-blue-100 text-blue-600 ",
  };
  return (
    <div
      className="bg-white rounded-lg
     border border-gray-200 p-6 
    "
    >
      <div className="flex justify-between items-center ">
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-2xl font-bold text-gray-600">{value}</p>
        </div>

        <div
          className={`size-12 ${colors[color]}
                    rounded-full flex items-center justify-center 
                  `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
