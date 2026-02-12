import React from "react";
import { PlusIcon } from "../../images/PlusIcon";
import { CalendarIcon } from "../../images/CalendarLogo";
import { TodoIcon } from "../../images/TodoIcon";
import type { IPage } from "../../types";

interface Props {
  setPage: (page: IPage) => void;
  page: IPage;
}

const NavigationModule = ({ setPage, page }: Props) => {
  return (
    <div className="flex justify-between items-center gap-2 relative   ">
      <div
        className="absolute h-13 w-13 rounded-full z-20 -top-5 outline-4 outline-primary/20 bg-primary/60 flex justify-center items-center "
        style={{ left: "calc(50% - 26px)" }}
      >
        <PlusIcon className="w-8 h-auto" color="var(--color-white)" />
      </div>
      <div
        className="absolute h-15 w-15 rounded-full z-10 -top-6 shadow bg-white "
        style={{ left: "calc(50% - 30px)" }}
      ></div>
      <div
        onClick={() => setPage("calendar")}
        className={`relative duration-300 cursor-pointer flex flex-col gap-1 flex-1 justify-center items-center  p-3 py-2 rounded-2xl ${page === "calendar" ? " bg-primary/25" : " bg-primary/10"}`}
      >
        <div className="absolute rounded-2xl pointer-events-none"></div>
        <CalendarIcon className="w-5 h-auto" color="var(--color-dark)" />
        <div className="text-xs text-dark select-none">calendar</div>
      </div>
      <div
        onClick={() => setPage("todo")}
        className={`relative duration-300 flex cursor-pointer flex-col gap-1 flex-1 justify-center items-center  p-3 py-2 rounded-2xl ${page === "todo" ? " bg-primary/25" : " bg-primary/10"}`}
      >
        <div className="absolute rounded-2xl pointer-events-none"></div>
        <TodoIcon className="w-5 h-auto" color="var(--color-dark)" />
        <div className="text-xs text-dark select-none">todo</div>
      </div>
    </div>
  );
};

export default NavigationModule;
