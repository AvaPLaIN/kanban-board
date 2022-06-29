import TaskItem from "./components/task-item/TaskItem";
import { kanbanConfig } from "./data/kanbanBoard";

function App() {
  return <TaskItem {...kanbanConfig} />;
}

export default App;
