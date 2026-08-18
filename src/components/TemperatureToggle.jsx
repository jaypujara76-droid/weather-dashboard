function TemperatureToggle({ unit, setUnit }) {
  const handleToggle = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  return (
    <div className="temperature-toggle">
      <span>°C</span>

      <label className="switch">
        <input
          type="checkbox"
          checked={unit === "F"}
          onChange={handleToggle}
        />

        <span className="slider"></span>
      </label>

      <span>°F</span>
    </div>
  );
}

export default TemperatureToggle;