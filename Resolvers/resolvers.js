import db from "../data/_db.js";

const Query = {
	// return all games
	games() {
		return db.games;
	},

	// return all authors
	authors() {
		return db.authors;
	},

	// return all rating
	reviews() {
		return db.reviews;
	},
};
export const resolvers = {
	Query,
};
