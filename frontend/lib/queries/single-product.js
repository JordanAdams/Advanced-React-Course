import gql from "graphql-tag";

export const SINGLE_PRODUCT_QUERY = gql`
  query GET_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      status
      photo {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;
