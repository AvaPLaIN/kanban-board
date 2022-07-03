import { useState } from "react";
import Filter from "./components/filter";
import TaskAreaList from "./components/task-area-list";
import useFilter from "./context/useFilter";
import { kanbanConfig } from "./data/kanbanBoard";

function App() {
  const filter = useFilter();
  const [areas, setAreas] = useState(kanbanConfig.areas);

  const handleUpdateAreas = (areas: any) => {
    setAreas(areas);
  };

  return (
    <div>
      {filter.generalFilter}
      {filter.titleFilter}
      <Filter />
      <TaskAreaList areas={areas} handleUpdateAreas={handleUpdateAreas} />
    </div>
  );
}

export default App;
