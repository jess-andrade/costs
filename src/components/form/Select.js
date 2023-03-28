import styles from './Select.module.css';

export default function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option>Select an option</option>
        {options.map((option) => (
          <option
            value={option.id}
            key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
