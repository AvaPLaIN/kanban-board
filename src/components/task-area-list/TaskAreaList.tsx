import TaskArea from "../task-area/TaskArea";
import { TaskAreaListContainer } from "./TaskAreaList.styles";
import { ITaskAreaList } from "./TaskAreaList.types";

const TaskAreaList = (props: ITaskAreaList) => {
  const { areas } = props;
  return (
    <TaskAreaListContainer>
      {areas.map((area) => (
        <TaskArea key={area.id} {...area} />
      ))}
    </TaskAreaListContainer>
  );
};

export default TaskAreaList;
