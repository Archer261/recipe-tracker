const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String!
        recipes: [Recipe]
    }

    type Recipe {
        _id: ID
        recipeName: String!
        description: String
        notes: String
        rating: Int
        public: Boolean
        ingredients: [Ingredient]
        steps: [Step]
        comments: [Comment]
    }

    type Ingredient {
        _id: ID
        ingredientName: String!
        measurement: String!
        quantity: Float!
    }

    type Step {
        _id: ID
        stepNumber: Int!
        stepText: String!
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
    }

    input RecipeInput {
        recipeName: String!
        description: String
        notes: String
        rating: Int
        public: Boolean
        ingredients: [IngredientInput]
        steps: [StepInput]
        comments: [CommentInput]
    }

    input IngredientInput {
        recipeId: String
        ingredientName: String!
        measurement: String!
        quantity: Float!
    }

    input StepInput {
        recipeId: String
        stepNumber: Int!
        stepText: String!
    }

    input CommentInput {
        recipeId: String!
        commentText: String
        commentAuthor: String
    }

    type Query {
        me: User
        users: [User]
        user(email: String!): User
        recipes(email: String): [Recipe]
        recipe(recipeId: ID!): Recipe
        ingredients: [Ingredient]
        steps: [Step]
        comments: [Comment]
    }

    type Mutation {
        addUser(firstName: String, lastName: String, email: String!, password: String): Auth
        login(email: String!, password: String!): Auth
        addRecipe(RecipeInput: RecipeInput): Recipe
        addIngredient(IngredientInput: IngredientInput): Recipe
        addStep(StepInput: StepInput): Recipe
        addComment(CommentInput: CommentInput): Recipe
        removeRecipe(recipeId: ID!): Recipe
        removeIngredient(recipeId: ID!, IngredientId: ID!): Recipe
        removeStep(recipeId: ID!, stepId: ID!): Recipe
        removeComment(recipeId: ID!, commentId: ID!): Recipe
    }
`;

module.exports = typeDefs;
