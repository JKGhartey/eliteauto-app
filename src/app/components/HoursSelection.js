"use client";

import React, { useState } from "react";

import { Menu } from "@headlessui/react";

import { FaArrowRightLong, FaClock } from "react-icons/fa6";

const hours = ["10:00 AM", "12:00 AM", "2:00 PM", "4:00 PM"];

export default function HoursSelection() {
  const [hour, setHour] = useState("10:00 AM");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* btn */}
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <FaClock className="text-accent" />
            <div className="text-[15px] uppercase font-bold ">Select Hours</div>
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <div className="font-medium text-[13px] text-secondary xl:ml-6">
              {hour}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="font-medium text-[13px] text-secondary">{hour}</div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {hours.map((hour, index) => {
            return (
              <div
                onClick={() => setHour(hour)}
                className="cursor-pointer py-4 text-center hover:bg-gray-50"
                key={index}
              >
                {hour}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}