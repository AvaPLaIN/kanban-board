import TaskItem from "../task-item/TaskItem";
import { TaskAreaContainer } from "./TaskArea.styles";
import { ITaskArea } from "./TaskArea.types";

const TaskArea = (props: ITaskArea) => {
  const { id, title, items } = props;

  // TODO - add handle onChange title + edit area

  return (
    <TaskAreaContainer>
      <div className="header">
        <h2 className="area-title">{title}</h2>
      </div>
      <div className="items">
        {items.map((item) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
    </TaskAreaContainer>
  );
};

export default TaskArea;
