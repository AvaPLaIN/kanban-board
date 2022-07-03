import { useEffect, useState } from "react";
import useFilter from "../../context/useFilter";
import filterByAll from "../../utils/filter-by-all";
import filterByTitle from "../../utils/filter-by-title";
import TaskItem from "../task-item";
import { ITaskItem } from "../task-item/TaskItem.types";
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

  const [filteredItems, setFilteredItems] = useState<ITaskItem[]>([]);

  useEffect(() => {
    let newFilteredItems = filterByTitle(filter.titleFilter, items);
    newFilteredItems = filterByAll(filter.generalFilter, newFilteredItems);
    setFilteredItems(newFilteredItems);
  }, [filter, items]);

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
