import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
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
