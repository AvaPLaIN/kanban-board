import useFilter from "../../context/useFilter";
import { FilterContainer } from "./Filter.styles";

const Filter = () => {
  const filter = useFilter();

  return (
    <FilterContainer>
      <div className="general-search">
        <input
          type="text"
          placeholder="Search"
          value={filter.generalFilter}
          onChange={(e) => filter.setGeneralFilter(e.target.value)}
        />
      </div>
      <div className="title-search">
        <input
          type="text"
          placeholder="Title Search..."
          value={filter.titleFilter}
          onChange={(e) => filter.setTitleFilter(e.target.value)}
        />
      </div>
      <div className="assigned-search"></div>
      <div className="tag-search"></div>
    </FilterContainer>
  );
};

export default Filter;
