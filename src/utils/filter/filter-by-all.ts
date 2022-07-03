import { ITaskItem } from "../../components/task-item/TaskItem.types";

const filterByAll = (query: string, items: ITaskItem[]) => {
  if (!query) return items;

  return items.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );
};

export default filterByAll;
