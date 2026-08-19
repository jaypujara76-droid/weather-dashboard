function SearchBar({
  city,
  setCity,
  onSearch,
  onSave,
  disabled,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />

      <button onClick={onSearch}>
        Search
      </button>

      <button
        onClick={onSave}
        disabled={disabled}
      >
        Save City
      </button>
    </div>
  );
}

export default SearchBar;