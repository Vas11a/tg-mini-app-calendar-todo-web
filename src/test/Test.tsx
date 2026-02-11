import { SettingsIcon } from "../images/SettingsIcon";
import { ArrowIcon } from "../images/ArrowIcon";
import TestCalendarElem from "./TestCalendarElem";
import TestNav from "./TestNav";

const Test = () => {
  return (
    <div className="p-4 min-h-dvh flex flex-col justify-between gap-4 m-auto max-w-150">
      <div>
        <div className="flex justify-end cursor-pointer">
          <SettingsIcon
            className="w-7.5 h-auto min-w-7.5 min-h-7 rounded-full"
            color="var(--color-primary-80)"
          />
        </div>
        <div className=" rounded-[20px] px-3 py-5 mt-6 shadow bg-primary-5 ">
          <div className="flex justify-between items-center">
            <ArrowIcon className="w-5 h-auto " color="var(--color-dark)" />
            <div className="font-medium text-dark">March 2026</div>
            <ArrowIcon
              className="w-5 h-auto rotate-180 "
              color="var(--color-dark)"
            />
          </div>

          <div className="mt-3 -mx-3 px-3 text-xs py-2 border-y border-primary-20 bg-primary-10 grid grid-cols-7 text-center text-dark/50 font-medium">
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
              <TestCalendarElem dayDate="26" isNotCurrentMonth />
              <TestCalendarElem dayDate="27" isNotCurrentMonth />
              <TestCalendarElem dayDate="28" isNotCurrentMonth />
              <TestCalendarElem dayDate="29" isNotCurrentMonth />
              <TestCalendarElem dayDate="30" isNotCurrentMonth />
              <TestCalendarElem dayDate="31" isNotCurrentMonth />
              <TestCalendarElem dayDate="1" isWeekend />
            </div>
            <div className="grid mt-2.5 grid-cols-7 place-items-center">
              <TestCalendarElem dayDate="2" />
              <TestCalendarElem dayDate="3" />
              <TestCalendarElem dayDate="4" />
              <TestCalendarElem dayDate="5" />
              <TestCalendarElem dayDate="6" />
              <TestCalendarElem dayDate="7" />
              <TestCalendarElem isWeekend dayDate="8" />
            </div>
            <div className="grid mt-2.5 grid-cols-7 place-items-center">
              <TestCalendarElem dayDate="9" />
              <TestCalendarElem dayDate="10" />
              <TestCalendarElem dayDate="11" isToday />
              <TestCalendarElem dayDate="12" />
              <TestCalendarElem dayDate="13" />
              <TestCalendarElem dayDate="14" />
              <TestCalendarElem isWeekend dayDate="15" />
            </div>
            <div className="grid mt-2.5 grid-cols-7 place-items-center">
              <TestCalendarElem dayDate="16" />
              <TestCalendarElem dayDate="17" />
              <TestCalendarElem dayDate="18" />
              <TestCalendarElem dayDate="19" />
              <TestCalendarElem dayDate="20" />
              <TestCalendarElem dayDate="21" />
              <TestCalendarElem isWeekend dayDate="22" />
            </div>
            <div className="grid mt-2.5 grid-cols-7 place-items-center">
              <TestCalendarElem dayDate="23" />
              <TestCalendarElem dayDate="24" />
              <TestCalendarElem dayDate="25" />
              <TestCalendarElem dayDate="26" />
              <TestCalendarElem dayDate="27" />
              <TestCalendarElem dayDate="28" />
              <TestCalendarElem isWeekend dayDate="1" isNotCurrentMonth />
            </div>
          </div>
        </div>
      </div>

      <TestNav />
    </div>
  );
};

export default Test;
