import React from "react";
import "../loading/Loading.css";

const Loader = ({ count = 3 }) => {
  return (
    <div className="container mx-auto max-w-[1140px] p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {Array(count)
          .fill("")
          .map((_, inx) => (
            <div key={inx} className="border rounded-lg shadow-lg h-auto p-3">
              <div className="w-full h-60 bg-slate-300 animate-pulse mb-4"></div>
              <div className="mb-4 w-9/12 h-6 bg-slate-300 animate-pulse"></div>
              <div className="w-8/12 h-6 bg-slate-300 animate-pulse"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Loader;
