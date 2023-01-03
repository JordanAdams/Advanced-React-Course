import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import styled from "styled-components";

const SingleProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  gap: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProductDetails = styled.div`
  position: relative;
`;

export default function SingleProduct({ product }) {
  const { name, price, photo, description } = product;

  return (
    <SingleProductStyles>
      {photo && (
        <img src={photo.image.publicUrlTransformed} alt={photo.altText} />
      )}
      <ProductDetails>
        <h2>{name}</h2>
        <PriceTag>{formatMoney(price)}</PriceTag>
        <p>{description}</p>
      </ProductDetails>
    </SingleProductStyles>
  );
}
