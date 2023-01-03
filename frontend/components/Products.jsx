import { useQuery } from "@apollo/client";
import styled from "styled-components";
import ProductListItem from "./ProductListItem";
import { ALL_PRODUCTS_QUERY } from "../lib/queries/all-products";

const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <ProductListStyles>
        {data.allProducts.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ProductListStyles>
    </div>
  );
}
