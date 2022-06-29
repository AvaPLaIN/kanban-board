import TaskAreaList from "./components/task-area-list/TaskAreaList";
import { kanbanConfig } from "./data/kanbanBoard";

function App() {
  return <TaskAreaList {...kanbanConfig} />;
}

export default App;
