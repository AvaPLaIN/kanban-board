import { ITaskItem } from "../task-item/TaskItem.types";

export interface ITaskArea {
  id: string;
  title: string;
  items: ITaskItem[];
}
