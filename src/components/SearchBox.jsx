import { ImSearch } from "react-icons/im";

import { createQueryObject } from "../helpers/helper";

import styles from "./styles/SearchBox.module.css";

function SearchBox({ setSearch, setQuery, search }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
