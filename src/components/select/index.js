import "./select.css";

const Select = ({
  defaultValue,
  name,
  data,
  id,
  value,
  text,
  onChange,
  className,
}) => {
  return (
    <select
      className={`custom ${className}`}
      defaultValue={""}
      name={name}
      onChange={onChange}
      required
    >
      <option value={""} disabled hidden className="default-option">
        {defaultValue}
      </option>
      {data && data.length > 0 ? (
        data.map((el) => (
          <option key={el[id]} value={el[value]}>
            {el[text]}
          </option>
        ))
      ) : (
        <></>
      )}
    </select>
  );
};

export default Select;
