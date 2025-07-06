import React from "react";
import GitHubCalendar from "react-github-calendar";

const GIthubStats = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="">
            <p className="text-2xl font-semibold">Github Stats</p>
      </div>
      <div  className=" ">
        <GitHubCalendar username="mehan05" year={2025} />
      </div>
    </div>
  );
};

export default GIthubStats;
