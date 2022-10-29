const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        recipes: [Recipe]!
    }

    type Recipe {
        _id: ID
        title: String
        description: String
        notes: String
        rating: Int
        public: Boolean
        ingredients: [Ingredient]!
        steps: [Step]!
        comments: [Comment]
    }

    type Ingredient {
        _id: ID
        ingredientName: String!
        measurement: String!
        quantity: Float!
        recipe: Recipe
    }

    type Step {
        _id: ID
        stepNumber: Int!
        stepText: String!
        recipe: Recipe
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        recipe: Recipe
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        recipes(username: String): [Recipe]
        recipe(recipeId: ID!): Recipe
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
        addRecipe(title: String!, description: String, note: String): Recipe
        addIngredient(recipeId: ID!, ingredientName: String!, measurement: String!, quantity: Int!): Recipe
        addStep(recipeId: ID!, stepNumber: Int!, steptext: String!): Recipe
        addComment(recipeId: ID!, commentText: String!): Recipe
        removeRecipe(recipeId: ID!): Recipe
        removeIngredient(recipeId: ID!, IngredientId: ID!): Recipe
        removeStep(recipeId: ID!, stepId: ID!): Recipe
        removeComment(recipeId: ID!, commentId: ID!): Recipe
    }
`;

module.exports = typeDefs;
