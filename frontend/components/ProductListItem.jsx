import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import Link from "next/link";
import formatMoney from "../lib/formatMoney";

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product.photo?.image?.publicUrlTransformed}
        alt={product.photo.altText}
      />
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <Title>
        <Link href={`/products/${product.id}`}>{product.name}</Link>
      </Title>
      <p>{product.description}</p>
    </ItemStyles>
  );
}
