import { ITaskItem } from "../../components/task-item/TaskItem.types";

const filterByTitle = (title: string, items: ITaskItem[]) => {
  if (!title) return items;

  return items.filter((item) =>
    item.title.toLowerCase().includes(title.toLowerCase())
  );
};

export default filterByTitle;
