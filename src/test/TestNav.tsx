import { CalendarIcon } from "../images/CalendarLogo";
import { TodoIcon } from "../images/TodoIcon";
import { PlusIcon } from "../images/PlusIcon";

const TestNav = () => {
  return (
    <div className="flex justify-between items-center gap-4 relative ">
      <div
        className="w-16 h-16 z-30 absolute  flex justify-center items-center border-4 border-primary-30 bg-primary-80 -top-10 rounded-full"
        style={{ left: "calc(50% - 32px)" }}
      >
        <PlusIcon className="w-8 h-auto" color="white" />
      </div>
      <div className="relative shadow overflow-hidden flex flex-col gap-1 flex-1 justify-center items-center bg-primary-40 p-3 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl  pointer-events-none z-0"></div>

        <CalendarIcon className="w-5 h-auto z-10" color="var(--color-dark)" />
        <div className="text-xs text-dark select-none z-10">calendar</div>

        <div className="absolute w-16 h-16 -right-8 -top-8 rounded-full bg-[#FFFCFA]  z-20"></div>
      </div>
      <div className="relative overflow-hidden flex flex-col gap-1 flex-1 justify-center items-center bg-primary-20 p-3 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl  pointer-events-none z-0"></div>

        <TodoIcon className="w-5 h-auto z-10" color="var(--color-dark)" />
        <div className="text-xs text-dark select-none z-10">todo</div>

        <div className="absolute w-16 h-16 -left-8 -top-8 rounded-full bg-[#FFFCFA]  border-primary z-20"></div>
      </div>
    </div>
  );
};

export default TestNav;
