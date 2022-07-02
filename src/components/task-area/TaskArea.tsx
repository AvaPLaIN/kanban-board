import { useEffect, useRef, useState } from "react";
import useFilter from "../../context/useFilter";
import filterByAll from "../../utils/filter-by-all";
import filterByTitle from "../../utils/filter-by-title";
import TaskItem from "../task-item";
import { ITaskItem } from "../task-item/TaskItem.types";
import { TaskAreaContainer } from "./TaskArea.styles";
import { ITaskArea } from "./TaskArea.types";

const TaskArea = (props: ITaskArea) => {
  const { id, title, items } = props;
  const filter = useFilter();

  const taskItemOnDragStartRef = useRef<number>(0);
  const taskItemOnDragEnterRef = useRef<number>(0);

  const [filteredItems, setFilteredItems] = useState<ITaskItem[]>([]);

  useEffect(() => {
    let newFilteredItems = filterByTitle(filter.titleFilter, items);
    newFilteredItems = filterByAll(filter.generalFilter, newFilteredItems);
    setFilteredItems(newFilteredItems);
  }, [filter, items]);

  const handleOnDragStart = (e: any, position: number) => {
    taskItemOnDragStartRef.current = position;
  };

  const handleOnDragEnter = (e: any, position: number) => {
    taskItemOnDragEnterRef.current = position;
  };

  const handleOnDragDrop = () => {
    const newItems = [...filteredItems];
    const itemToMove = newItems[taskItemOnDragStartRef.current];
    newItems.splice(taskItemOnDragStartRef.current, 1);
    newItems.splice(taskItemOnDragEnterRef.current, 0, itemToMove);
    setFilteredItems(newItems);
  };

  return (
    <TaskAreaContainer>
      <div className="header">
        <h2 className="area-title">{title}</h2>
      </div>
      <div className="items">
        {filteredItems.map((item, index) => (
          <div
            draggable
            onDragStart={(e) => handleOnDragStart(e, index)}
            onDragEnter={(e) => handleOnDragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={handleOnDragDrop}
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
