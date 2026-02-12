import React from "react";
import { ArrowIcon } from "../../images/ArrowIcon";
import DayElem from "./DayElem";

const CalendarModule = () => {
  return (
    <div className=" rounded-[20px] px-3 py-5 mt-10 shadow bg-primary/5 ">
      <div className="flex justify-between items-center">
        <ArrowIcon className="w-5 h-auto " color="var(--color-dark)" />
        <div className="font-medium text-dark">March 2026</div>
        <ArrowIcon
          className="w-5 h-auto rotate-180 "
          color="var(--color-dark)"
        />
      </div>

      <div className="mt-3 -mx-3 px-3 text-xs py-2 border-y border-primary/20 bg-primary/10 grid grid-cols-7 text-center text-dark/50 font-medium">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div className="mt-3 -mx-3 px-3">
        <div className="grid grid-cols-7 place-items-center">
          <DayElem dayDate="26" isNotCurrentMonth />
          <DayElem dayDate="27" isNotCurrentMonth />
          <DayElem dayDate="28" isNotCurrentMonth />
          <DayElem dayDate="29" isNotCurrentMonth />
          <DayElem dayDate="30" isNotCurrentMonth />
          <DayElem dayDate="31" isNotCurrentMonth />
          <DayElem dayDate="1" isWeekend />
        </div>
        <div className="grid mt-2.5 grid-cols-7 place-items-center">
          <DayElem dayDate="2" />
          <DayElem dayDate="3" />
          <DayElem dayDate="4" />
          <DayElem dayDate="5" />
          <DayElem dayDate="6" />
          <DayElem dayDate="7" />
          <DayElem isWeekend dayDate="8" />
        </div>
        <div className="grid mt-2.5 grid-cols-7 place-items-center">
          <DayElem dayDate="9" />
          <DayElem dayDate="10" />
          <DayElem dayDate="11" isToday />
          <DayElem dayDate="12" />
          <DayElem dayDate="13" />
          <DayElem dayDate="14" />
          <DayElem isWeekend dayDate="15" />
        </div>
        <div className="grid mt-2.5 grid-cols-7 place-items-center">
          <DayElem dayDate="16" />
          <DayElem dayDate="17" />
          <DayElem dayDate="18" />
          <DayElem dayDate="19" />
          <DayElem dayDate="20" />
          <DayElem dayDate="21" />
          <DayElem isWeekend dayDate="22" />
        </div>
        <div className="grid mt-2.5 grid-cols-7 place-items-center">
          <DayElem dayDate="23" />
          <DayElem dayDate="24" />
          <DayElem dayDate="25" />
          <DayElem dayDate="26" />
          <DayElem dayDate="27" />
          <DayElem dayDate="28" />
          <DayElem isWeekend dayDate="1" isNotCurrentMonth />
        </div>
      </div>
    </div>
  );
};

export default CalendarModule;
