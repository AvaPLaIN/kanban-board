import Filter from "./components/filter";
import TaskAreaList from "./components/task-area-list";
import useFilter from "./context/useFilter";
import { kanbanConfig } from "./data/kanbanBoard";

function App() {
  const filter = useFilter();

  return (
    <div>
      {filter.generalFilter}
      {filter.titleFilter}
      <Filter />
      <TaskAreaList {...kanbanConfig} />
    </div>
  );
}

export default App;
