import React from 'react'

import {
  GiAbstract020,
  GiAbstract024,
  GiAbstract041,
  GiAbstract104,
} from "react-icons/gi";

function Card1({ heading, description, icon, className }) {
  return (
    <div className={`flex gap-4 rounded-xl shadow-sm p-6 ${className}`}>
      <div className="min-w-max">{icon}</div>
      <div className="space-y-2">
        <h3 className="text-[22px] font-semibold">{heading}</h3>
        <p className="leading-8 text-gray-500 font-normal">{description}</p>
      </div>
    </div>
  );
}

function ServicesOffer() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 bg-white p-3 sm:p-8">
      <Card1
        className="bg-[#fcf4ff]"
        heading="Web Development"
        description="Creation of fully customized web pages for startups and personal use."
        icon={<GiAbstract020 size="2.5rem" className="text-[#D566FF]" />}
      />
      <Card1
        className="bg-[#fefaf0]"
        heading="Mobile Apps"
        description="Development of app fully customized for IOS/Android."
        icon={<GiAbstract024 size="2.5rem" className="text-[#DDA10C]" />}
      />
      <Card1
        className="bg-[#fff4f4]"
        heading="Game Design & Creation"
        description="Development of videogames at engines like Unity or Unreal."
        icon={<GiAbstract041 size="2.5rem" className="text-[#FF6080]" />}
      />
      <Card1
        className="bg-[#f3faff]"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        icon={<GiAbstract104 size="2.5rem" className="text-[#269FFF]" />}
      />
    </div>
  );
}



export default ServicesOffer