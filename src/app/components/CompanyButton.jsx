import React from "react";

const CompanyButton = ({ active, selectedTab, companyName }) => {
  const buttonStyle = active
    ? "text-white  bg-primary-500"
    : "text-slate-400";

  return (
    <button onClick={selectedTab} className={`text-sm w-full h-full py-4 px-3 place-self-center ${buttonStyle} hover:bg-primary-600 hover:bg-opacity-35 hover:text-white duration-200 ease-in-out`}>
      {companyName}
    </button>
  );
};

export default CompanyButton;
