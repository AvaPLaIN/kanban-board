import TaskArea from "./components/task-area/TaskArea";
import { kanbanConfig } from "./data/kanbanBoard";

function App() {
  return <TaskArea {...kanbanConfig} />;
}

export default App;
