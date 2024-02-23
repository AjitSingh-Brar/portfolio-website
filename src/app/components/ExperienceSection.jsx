"use client";
import React, { useState, useTransition } from "react";
import { COMPANY_DATA } from "../data/companyData";
import CompanyButton from "./CompanyButton";

const ExperienceSection = () => {
  const [tab, setTab] = useState("telus");
  const [isPending, startTransition] = useTransition();

  const handleCompanyChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="experience" className="text-white flex flex-col items-center h-full py-28">
      <h2 className="text-4xl font-bold text-white mt-1 mb-5 md:mb-7">
        My Exerience
      </h2>
      <div className="flex flex-col justify-center items-center md:w-1/2">
        <div className="border-b border-slate-700 w-screen md:w-full grid grid-cols-3">
          <CompanyButton
            active={tab === "telus"}
            selectedTab={() => handleCompanyChange("telus")} companyName={"TELUS"}
          />
          <CompanyButton
            active={tab === "luxsonic"}
            selectedTab={() => handleCompanyChange("luxsonic")} companyName={"Luxsonic Technologies"}
          />
          <CompanyButton
            active={tab === "communitech"}
            selectedTab={() => handleCompanyChange("communitech")} companyName={"Communitech"}
          />
        </div>
        <div className="px-5 py-5">
          <div>
            <h2 className="text-xl mb-1 font-semibold">
            {COMPANY_DATA.find((company) => company.id === tab).position}{" "}
              <span className="text-primary-500"> @ {COMPANY_DATA.find((company) => company.id === tab).companyName}</span>
            </h2>
            <p className="text-sm text-slate-400 mb-2">{COMPANY_DATA.find((company) => company.id === tab).timeline}</p>
            {COMPANY_DATA.find((company) => company.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
