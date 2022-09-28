import {useState} from "react";

const FilterForm = () => {
  const [checkValue, setCheckValue] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const handleCheckChange = (e: any) => {
    setCheckValue(e.target.value);
  };

  const handleTitleFilterChange = (e: any) => {
    setTitleFilter(e.target.value);
  };

  const handlePriorityFilter = (e: any) => {
    setPriorityFilter(e.target.value);
  };

  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-1">
        <input
          checked
          className="form-checkbox rounded-3xl"
          id="all"
          name="filterCheck"
          type="radio"
          value=""
          onChange={handleCheckChange}
        />
        <label htmlFor="all">Todas</label>
      </div>
      <div className="flex items-center gap-1">
        <input
          className="form-checkbox rounded-3xl"
          id="user"
          name="filterCheck"
          type="radio"
          value="user"
          onChange={handleCheckChange}
        />
        <label htmlFor="user">Mis tareas</label>
      </div>
      <div className="flex-1" />
      <input
        className="form-input rounded-xl border-gray-300"
        name="titleFilter"
        placeholder="Seleccionar por titulo..."
        type="text"
        value={titleFilter}
        onChange={handleTitleFilterChange}
      />
      <select
        className="form-select rounded-xl border-gray-300"
        name="priorityFilter"
        value={priorityFilter}
        onChange={handlePriorityFilter}
      >
        <option value="">Seleccione una prioridad</option>
        <option value="ALTA">Alta</option>
      </select>
    </div>
  );
};

export default FilterForm;
