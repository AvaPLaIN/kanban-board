import useFilter from "../../context/useFilter";
import generalFilter from "../../utils/filter";
import TaskItem from "../task-item";
import { TaskAreaContainer } from "./TaskArea.styles";
import { ITaskArea } from "./TaskArea.types";

const TaskArea = (props: ITaskArea) => {
  const {
    id,
    title,
    items,
    index: taskAreaIndex,
    handleOnDragStart,
    handleOnDragEnter,
    handleOnDragOver,
    handleOnDragEnd,
  } = props;

  const filter = useFilter();

  const filteredItems = generalFilter(items, filter);

  return (
    <TaskAreaContainer onDragOver={() => handleOnDragOver(taskAreaIndex)}>
      <div className="header">
        <h2 className="area-title">{title}</h2>
      </div>
      <div className="items">
        {filteredItems.map((item, index) => (
          <div
            draggable
            onDragStart={(e) => handleOnDragStart(taskAreaIndex, index)}
            onDragEnter={() => handleOnDragEnter(index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={handleOnDragEnd}
            key={item.id}
          >
            <TaskItem {...item} />
          </div>
        ))}
      </div>
    </TaskAreaContainer>
  );
};

export default TaskArea;
