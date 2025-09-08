<div align="center">
	<h1>Learn GraphQL</h1>
	<p>
		<a href="https://github.com/PranayRathi/learn-graphql"><img src="https://img.shields.io/github/license/PranayRathi/learn-graphql?style=flat-square" alt="License"></a>
		<img src="https://img.shields.io/badge/Node.js-16%2B-green?style=flat-square" alt="Node.js">
		<img src="https://img.shields.io/badge/Apollo%20Server-5.x-blueviolet?style=flat-square" alt="Apollo Server">
		<img src="https://img.shields.io/badge/GraphQL-API-ff69b4?style=flat-square" alt="GraphQL">
	</p>
</div>

> A simple GraphQL API server built with Apollo Server and Node.js. Demonstrates GraphQL schema, resolvers, and querying data for games, authors, and reviews.

---

## 🚀 Features

-   GraphQL API for games, authors, and reviews
-   Apollo Server standalone setup
-   Example in-memory data
-   Ready-to-run and easy to extend

## 📁 Project Structure

-   `index.js` — Entry point. Sets up Apollo Server with schema and resolvers.
-   `typeDefs/schema.js` — GraphQL schema definitions for Game, Author, Review, and Query types.
-   `Resolvers/resolvers.js` — Resolver functions for queries and type relationships.
-   `data/_db.js` — In-memory data for games, authors, and reviews.
-   `Examples.txt` — Example GraphQL queries for learning and testing.

## 🛠️ Getting Started

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

The server will start at [http://localhost:4000](http://localhost:4000).

## 📚 Example Queries

See `Examples.txt` for more! Here are a few samples:

```graphql
# Get all games, authors, and reviews
query Games {
	games {
		id
		platform
	}
	authors {
		id
		name
		verified
	}
	reviews {
		content
		rating
	}
}
```

```graphql
# Get a game, review, and author by ID
query findOne($gameId: ID!, $reviewId: ID!, $authorId: ID!) {
	game(id: $gameId) {
		title
	}
	review(id: $reviewId) {
		content
		rating
	}
	author(id: $authorId) {
		name
	}
}
```

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the ISC License.

---

<div align="center">
	<sub>Project by <a href="https://github.com/PranayRathi">PranayRathi</a></sub>
</div>
