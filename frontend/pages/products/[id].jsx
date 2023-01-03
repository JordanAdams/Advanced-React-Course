import { useQuery } from "@apollo/client";
import { SINGLE_PRODUCT_QUERY } from "../../lib/queries/single-product";
import DisplayError from "../../components/ErrorMessage";
import SingleProduct from "../../components/SingleProduct";

export default function ProductPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id: query.id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <DisplayError error={error} />;
  }

  return <SingleProduct product={data.Product} />;
}
