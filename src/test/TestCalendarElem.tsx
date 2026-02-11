interface Props {
  dayDate: string;
  isWeekend?: boolean;
  isToday?: boolean;
  isNotCurrentMonth?: boolean;
  tasksCount?: number;
}

const TestCalendarElem = ({
  dayDate,
  isWeekend,
  isToday,
  isNotCurrentMonth,
}: Props) => {
  const getClassName = (): {
    containerClassName: string;
    taskClassName: string;
  } => {
    let defaultContainerClassName =
      "w-9 min-w-9 h-11 rounded-md flex flex-col items-center text-dark";
    let containerBgColor = "bg-primary-20";
    let defaultTaskClassName = "w-[5px] h-[5px] rounded-full";
    let taskBgColor = "bg-primary-80/50";

    if (isWeekend) {
      containerBgColor = " bg-primary-40!";
      taskBgColor = " bg-primary-80/80!";
    }
    if (isNotCurrentMonth) {
      defaultContainerClassName += " opacity-30!";
    }
    if (isToday) {
      defaultContainerClassName +=
        " font-semibold outline-2 outline-primary-80";
    }
    return {
      containerClassName: defaultContainerClassName + " " + containerBgColor,
      taskClassName: defaultTaskClassName + " " + taskBgColor,
    };
  };

  return (
    <div className={getClassName().containerClassName}>
      <div className={"text-sm opacity-70 mt-1.5 select-none"}>{dayDate}</div>
      <div className="w-full p-0.5 pt-1 flex justify-center items-center flex-wrap gap-0.5">
        <div className={getClassName().taskClassName}></div>
        <div className={getClassName().taskClassName}></div>
        <div className={getClassName().taskClassName}></div>
      </div>
    </div>
  );
};

export default TestCalendarElem;
