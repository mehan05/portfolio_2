import React from "react";
import GitHubCalendar from "react-github-calendar";

const GIthubStats = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5   w-full h-full">
      <div className="flex">
            <p className="text-2xl font-semibold">Github Stats</p>
      </div>
      <div  className="w-full h-full flex justify-center items-center  overflow-y-auto">
        <GitHubCalendar username="mehan05" year={2025} />
      </div>
    </div>
  );
};

export default GIthubStats;
