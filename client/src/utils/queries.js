import { gql } from '@apollo/client';

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
    query getRecipes($userEmail: String!) {
        myRecipes(userEmail: $userEmail) {
            _id
            recipeName
            description
            image
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
    query getRecipe($_id: ID!) {
        recipe(_id: $_id) {
            _id
            recipeName
            description
            image
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
