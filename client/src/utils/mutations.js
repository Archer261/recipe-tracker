import { gql } from '@apollo/client';
export const ADD_RECIPE = gql`
  mutation addRECIPE($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;