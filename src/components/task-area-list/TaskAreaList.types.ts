import { TaskArea } from "../task-area/TaskArea.types";

export interface ITaskAreaList {
  areas: TaskArea[];
  handleUpdateAreas: (areas: TaskArea[]) => void;
}
