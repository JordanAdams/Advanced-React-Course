import Form from "./styles/form";
import styled from "styled-components";
import DisplayError from "./ErrorMessage";

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function CreateProduct() {
  const { inputs, handleChange } = useForm()
  const { error, loading } = null;

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            id="name"
            placeholder="name"
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            value={inputs.price}
            onChange={handleChange}
            name="price"
            id="price"
            placeholder={0}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            value={inputs.description}
            onChange={handleChange}
            name="description"
            id="description"
            placeholder=""
          ></textarea>
        </label>

        <Buttons>
          <button type="submit">Update</button>
        </Buttons>
      </fieldset>
    </Form>
  );
}
