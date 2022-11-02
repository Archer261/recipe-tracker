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