import { useRef } from "react";
import TaskArea from "../task-area";
import { TaskAreaListContainer } from "./TaskAreaList.styles";
import { ITaskAreaList } from "./TaskAreaList.types";

const TaskAreaList = (props: ITaskAreaList) => {
  const { areas, handleUpdateAreas } = props;

  const currentDraggedTaskItemRef = useRef<any>(null);

  const handleOnDragStart = (
    prevBoardPosition: number,
    prevPosition: number
  ) => {
    currentDraggedTaskItemRef.current = { prevBoardPosition, prevPosition };
  };

  const handleOnDragEnter = (newPosition: number) => {
    currentDraggedTaskItemRef.current = {
      ...currentDraggedTaskItemRef.current,
      newPosition,
    };
  };

  const handleOnDragOver = (newBoardPosition: number) => {
    currentDraggedTaskItemRef.current = {
      ...currentDraggedTaskItemRef.current,
      newBoardPosition,
    };
  };

  const handleOnDragEnd = () => {
    const { prevBoardPosition, prevPosition, newBoardPosition, newPosition } =
      currentDraggedTaskItemRef.current;

    const newAreas = [...areas];

    const dragableItem = newAreas[prevBoardPosition].items[prevPosition];
    newAreas[prevBoardPosition].items.splice(prevPosition, 1);

    newAreas[newBoardPosition].items.splice(newPosition, 0, dragableItem);

    handleUpdateAreas(newAreas);
  };

  return (
    <TaskAreaListContainer>
      {areas.map((area: any, index: number) => (
        <TaskArea
          key={area.id}
          {...area}
          index={index}
          handleOnDragStart={handleOnDragStart}
          handleOnDragEnter={handleOnDragEnter}
          handleOnDragOver={handleOnDragOver}
          handleOnDragEnd={handleOnDragEnd}
        />
      ))}
    </TaskAreaListContainer>
  );
};

export default TaskAreaList;
