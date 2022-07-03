import { useState } from "react";
import Filter from "./components/filter";
import TaskAreaList from "./components/task-area-list";
import { kanbanConfig } from "./data/kanbanBoard";

function App() {
  const [areas, setAreas] = useState(structuredClone(kanbanConfig.areas));

  const handleUpdateAreas = (areas: any) => {
    setAreas(areas);
  };

  return (
    <div>
      <Filter />
      <TaskAreaList areas={areas} handleUpdateAreas={handleUpdateAreas} />
    </div>
  );
}

export default App;
