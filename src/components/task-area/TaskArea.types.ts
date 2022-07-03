import { ITaskItem } from "../task-item/TaskItem.types";

export interface ITaskArea extends TaskArea {
  index: number;
  handleOnDragStart: (prevBoardPosition: number, prevPosition: number) => void;
  handleOnDragEnter: (newPosition: number) => void;
  handleOnDragOver: (newBoardPosition: number) => void;
  handleOnDragEnd: () => void;
}

export type TaskArea = {
  id: string;
  title: string;
  items: ITaskItem[];
};
