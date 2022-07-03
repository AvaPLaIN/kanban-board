import { ITaskItem } from "../../components/task-item/TaskItem.types";
import { Filter } from "../../context/useFilter";
import filterByAll from "./filter-by-all";
import filterByTitle from "./filter-by-title";

const generalFilter = (items: ITaskItem[], filters: Filter) => {
  if (!filters) return items;

  let filteredItems = filterByAll(filters.generalFilter, items);
  filteredItems = filterByTitle(filters.titleFilter, filteredItems);

  return filteredItems;
};

export default generalFilter;
