import useFilter from "../../context/useFilter";
import filterByTitle from "../../utils/filter-by-title";
import TaskItem from "../task-item";
import { TaskAreaContainer } from "./TaskArea.styles";
import { ITaskArea } from "./TaskArea.types";

const TaskArea = (props: ITaskArea) => {
  const { id, title, items } = props;

  const filter = useFilter();

  return (
    <TaskAreaContainer>
      <div className="header">
        <h2 className="area-title">{title}</h2>
      </div>
      <div className="items">
        {filterByTitle(filter.query, items).map((item) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
    </TaskAreaContainer>
  );
};

export default TaskArea;
