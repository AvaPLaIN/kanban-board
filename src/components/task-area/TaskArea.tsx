import { useEffect, useState } from "react";
import useFilter from "../../context/useFilter";
import filterByAll from "../../utils/filter-by-all";
import filterByTitle from "../../utils/filter-by-title";
import TaskItem from "../task-item";
import { ITaskItem } from "../task-item/TaskItem.types";
import { TaskAreaContainer } from "./TaskArea.styles";
import { ITaskArea } from "./TaskArea.types";

const TaskArea = (props: ITaskArea) => {
  const { id, title, items } = props;
  const [filteredItems, setFilteredItems] = useState<ITaskItem[]>([]);

  const filter = useFilter();

  useEffect(() => {
    let newFilteredItems = filterByTitle(filter.titleFilter, items);
    newFilteredItems = filterByAll(filter.generalFilter, newFilteredItems);
    setFilteredItems(newFilteredItems);
  }, [filter, items]);

  return (
    <TaskAreaContainer>
      <div className="header">
        <h2 className="area-title">{title}</h2>
      </div>
      <div className="items">
        {filteredItems.map((item) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
    </TaskAreaContainer>
  );
};

export default TaskArea;
