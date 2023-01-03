import { useState } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  const handleChange = (event) => {
    let { name, value, type, files } = event.target;

    if (type === "number") {
      value = parseInt(value, 10);
    }

    if (type === "file") {
      [value] = files;
    }

    setInputs((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const resetForm = () => setInputs(initial);

  const clearForm = () => {
    const blankInputs = Object.keys(inputs).reduce(
      (acc, key) => ({ ...acc, [key]: "" }),
      {}
    );

    setInputs(blankInputs);
  };

  return { inputs, handleChange, resetForm, clearForm };
}
