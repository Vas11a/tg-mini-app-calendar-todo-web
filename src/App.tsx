import { useState } from "react";
import type { IPage } from "./types";
import { SettingsIcon } from "./images/SettingsIcon";
import MainContent from "./modules/MainContent";
import NavigationModule from "./modules/navigation/NavigationModule";

function App() {
  const [page, setPage] = useState<IPage>("calendar");

  return (
    <div className="p-4 min-h-dvh flex flex-col justify-between gap-4 m-auto max-w-150">
      <div>
        <div className="flex justify-end cursor-pointer">
          <div onClick={() => setPage("settings")}>
            <SettingsIcon
              className="w-7.5 h-auto min-w-7.5 min-h-7.5 opacity-60 "
              color="var(--color-primary)"
            />
          </div>
        </div>
        <MainContent page={page} />
      </div>

      <NavigationModule setPage={setPage} page={page} />
    </div>
  );
}

export default App;
