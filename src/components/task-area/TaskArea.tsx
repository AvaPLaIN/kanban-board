import TaskItem from "../task-item/TaskItem";
import { TaskAreaContainer } from "./TaskArea.styles";
import { ITaskArea } from "./TaskArea.types";

const TaskArea = (props: ITaskArea) => {
  const { items } = props;

  return (
    <TaskAreaContainer>
      <div className="header">Header</div>
      {items.map((item) => (
        <TaskItem key={item.id} {...item} />
      ))}
    </TaskAreaContainer>
  );
};

export default TaskArea;
