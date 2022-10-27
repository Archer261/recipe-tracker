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
        rating: Number
        public: Boolean
        ingrediants: [Ingredient]!
        steps: [Step]!
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
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
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addRecipe(title: String!, description: String, note: String): Recipe
        addIngredient(recipeId: ID!, ingredientName: String!, measurement: String!, quantity: Number!): Recipe
        addStep(recipeId: ID!, stepNumber: Number!, steptext: String!): Recipe
        addComment(recipeId: ID!, commentText: String!): Recipe
        removeIngredient(recipeId: ID!, IngredientId: ID!): Recipe
        removeStep(recipeId: ID!, stepId: ID!): Recipe
        removeComment(recipeId: ID!, commentId: ID!): Recipe
    }
`;

module.exports = typeDefs;
