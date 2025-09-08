import db from "../data/_db.js";
export const resolvers = {
	Query: {
		// return all games
		games() {
			return db.games;
		},

		game(parent, args, context) {
			console.log(parent, args, db.games);
			return db.games.find((item) => item.id === args.id);
		},

		// return all authors
		authors() {
			return db.authors;
		},

		author(_, args) {
			return db.authors.find((data) => data.id === args.id);
		},

		// return all rating
		reviews() {
			return db.reviews;
		},

		review(_, args) {
			return db.reviews.find((item) => item.id == args.id);
		},
	},

	Game: {
		review(parent) {
			console.log(parent);
			return db.reviews.filter((rev) => rev.game_id === parent.id);
		},
	},

	Author: {
		review(parent) {
			console.log(parent);
			return db.reviews.filter((rev) => rev.author_id === parent.id);
		},
	},

	Review: {
		author(parent) {
			return db.authors.find((item) => item.id == parent.author_id);
		},
		game(parent) {
			console.log(parent);
			return db.games.find((item) => item.id == parent.game_id);
		},
	},

	Mutation: {
		deleteGame(_, args) {
			db.games = db.games.filter((g) => g.id === args.id);
			return db.games;
		},

		addGame(_, args) {
			let game = {
				...args.game,
				id: db.games.length + 1 + "",
			};
			db.games.push(game);
			return game;
		},

		updateGame(_, args) {
			db.games = db.games.map((element) => {
				if (element.id === args.id) {
					return { ...element, ...args.game };
				}
				return element;
			});

			return db.games.find((ele) => ele.id == args.id);
		},
	},
};
