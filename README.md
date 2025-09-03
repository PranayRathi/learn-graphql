# Learn GraphQL

This project is a simple GraphQL API server built with Apollo Server and Node.js. It demonstrates the basics of GraphQL schema, resolvers, and querying data for games, authors, and reviews.

## Features

-   GraphQL API for games, authors, and reviews
-   Apollo Server standalone setup
-   Example data for games, authors, and reviews

## Project Structure

-   `index.js`: Entry point. Sets up Apollo Server with schema and resolvers.
-   `typeDefs/schema.js`: GraphQL schema definitions for Game, Author, Review, and Query types.
-   `Resolvers/resolvers.js`: Resolver functions for queries and type relationships.
-   `data/_db.js`: In-memory data for games, authors, and reviews.

## Getting Started

### Prerequisites

-   Node.js (v16+ recommended)

### Install dependencies

```bash
npm install
```

### Run the server

```bash
node index.js
```

The server will start at `http://localhost:4000`.

## Example Queries

```graphql
query {
	games {
		id
		title
		platform
		review {
			rating
			content
		}
	}
}
```

## License

ISC

---

Project by PranayRathi
