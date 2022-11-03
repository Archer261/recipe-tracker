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
            recipes {
                _id
                recipeName
                description
                notes
                rating
                ingredients {
                    _id
                    ingredientName
                }
                steps {
                    stepNumber
                    stepText
                }
            }
        }
    }
`;

export const QUERY_USERS = gql`
    query getUsers {
        users {
            _id
            firstName
            lastName
            email
        }
    }
`;

export const QUERY_USER = gql`
    query getUser($email: String!) {
        user(email: $email) {
            _id
            firstName
            lastName
            email
            recipes {
                _id
                recipeName
                description
                notes
                rating
                ingredients {
                    _id
                    ingredientName
                }
                steps {
                    stepNumber
                    stepText
                }
            }
        }
    }
`;

export const QUERY_RECIPES = gql`
    query getRecipes {
        recipes {
            _id
            recipeName
            description
            notes
            rating
            ingredients {
                _id
                ingredientName
            }
            steps {
                _id
                stepNumber
                stepText
            }
        }
    }
`;

export const QUERY_RECIPE = gql`
    query getRecipe($recipeId: ID!) {
        recipe(recipeId: $recipeId) {
            _id
            recipeName
            description
            notes
            rating
            ingredients {
                _id
                ingredientName
            }
            steps {
                _id
                stepNumber
                stepText
            }
        }
    }
`;

export const QUERY_INGREDIENTS = gql`
    query getIngredients {
        ingredients {
            _id
            ingredientName
        }
    }
`;

export const QUERY_STEPS = gql`
    query getSteps {
        steps {
            _id
            stepNumber
            stepText
        }
    }
`;
