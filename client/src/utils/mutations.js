import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_RECIPE = gql`
    mutation insertRecipe(
        $recipeName: String!
        $description: String!
        $image: String
        $ingredients: [IngredientInput]
        $steps: [StepInput]
    ) {
        addRecipe(
            RecipeInput: {
                recipeName: $recipeName
                description: $description
                ingredients: $ingredients
                steps: $steps
            }
        ) {
            recipeName
            description
            ingredients {
                ingredientName
                measurement
                quantity
            }
            steps {
                stepNumber
                stepText
            }
        }
    }
`;

export const ADD_INGREDIENT = gql`
    mutation AddIngredient($recipeId: String!, $ingredientName: String!, $measurement: String, $quantity: Float) {
        addIngredient(
            IngredientInput: {
                recipeId: $recipeId
                ingredientName: $ingredientName
                measurement: $measurement
                quantity: $quantity
            }
        ) {
            _id
            ingredients {
                _id
                ingredientName
                measurement
                quantity
            }
        }
    }
`;

export const ADD_STEP = gql`
    mutation AddStep($recipeId: String!, $stepNumber: Int!, $stepText: String!) {
        addStep(StepInput: { recipeId: $recipeId, stepNumber: $stepNumber, stepText: $stepText }) {
            _id
            steps {
                _id
                stepNumber
                stepText
            }
        }
    }
`;

export const REMOVE_USER = gql`
    mutation removeUser($userId: ID!) {
        removeUser(userId: $userId) {
            _id
        }
    }
`;

export const REMOVE_RECIPE = gql`
    mutation removeRecipe($recipeId: ID!) {
        removeRecipe(recipeId: $recipeId) {
            _id
        }
    }
`;

export const REMOVE_INGREDIENT = gql`
    mutation removeIngredient($recipeId: ID!, $ingredientId: ID!) {
        removeIngredient(recipeId: $recipeId, ingredientId: $ingredientId) {
            _id
            ingredients {
                _id
            }
        }
    }
`;

export const REMOVE_STEP = gql`
    mutation removeStep($recipeId: ID!, $stepId: ID!) {
        removeStep(recipeId: $recipeId, stepId: $stepId) {
            _id
            steps {
                _id
            }
        }
    }
`;
