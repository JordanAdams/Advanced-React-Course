import useForm from "../lib/hooks/useForm";
import Form from "./styles/form";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import DisplayError from "./ErrorMessage";
import { CREATE_PRODUCT_MUTATION } from "../lib/mutations/create-product";
import { ALL_PRODUCTS_QUERY } from "../lib/queries/all-products";
import { useRouter } from "next/router";

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function CreateProduct() {
  const router = useRouter();
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: "New Product",
    price: 0,
    description: "",
  });

  const [createProduct, { error, loading }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await createProduct();
        router.push({
          pathname: `/products/${res.data.createProduct.id}`,
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Image
          <input
            required
            type="file"
            onChange={handleChange}
            name="image"
            id="image"
          />
        </label>
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
          <button type="submit">+ New Product</button>

          <button type="button" onClick={resetForm}>
            Reset To Defaults
          </button>

          <button type="button" onClick={clearForm}>
            Clear All
          </button>
        </Buttons>
      </fieldset>
    </Form>
  );
}
