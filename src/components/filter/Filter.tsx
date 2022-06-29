import useFilter from "../../context/useFilter";
import { FilterContainer } from "./Filter.styles";

const Filter = () => {
  const filter = useFilter();

  return (
    <FilterContainer>
      <div className="general-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="title-search">
        <input
          type="text"
          placeholder="Title Search..."
          value={filter.query}
          onChange={(e) => filter.setQuery(e.target.value)}
        />
      </div>
      <div className="assigned-search"></div>
      <div className="tag-search"></div>
    </FilterContainer>
  );
};

export default Filter;
