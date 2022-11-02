import { gql } from '@apollo/client';


export const QUERY_RECIPES = gql`
query getRecipes {
  recipes {
    _id
    recipeName
    description
    rating
    public
  }
}
`;

export const QUERY_ME = gql`
    query Me {
        me {
            firstName
            lastName
            email
            orders {
                _id
                purchaseDate
                courses {
                    _id
                    name
                    image
                    description
                    price
                }
            }
        }
    }
`;

export const QUERY_USER = gql`
    query {
        user {
            firstName
            lastName
            email
        }
    }
`;
