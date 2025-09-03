import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typeDefs/schema.js";
import { resolvers } from "./Resolvers/resolvers.js";
// Server setup

const server = new ApolloServer({
	// typeDefs
	typeDefs,
	// Resolvers
	resolvers,
});

// Get URL

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log("Graph Server Stated at URL :- " + url);
