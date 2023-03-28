import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from '../project/ProjectForm.module.css';

export default function ServiceForm({ handleSubmit, textBtn, projectData }) {

  const [service, setService] = useState([]);

  function submit(e) {
    e.preventDefault();

    //changing original object
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    //filling the service - input
    //creating object

    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Service name"
        name="name"
        placeholder="Enter service name"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Service cost"
        name="cost"
        placeholder="Enter the total amount"
        handleOnChange={handleChange}
      />

      <Input
        type="text"
        text="Service description"
        name="description"
        placeholder="Describe the service"
        handleOnChange={handleChange}
      />

      <SubmitButton text="Add service" />
    </form>
  );
}