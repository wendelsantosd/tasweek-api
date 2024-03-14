type MONGO = {
	uri: string;
};

export const mongo: MONGO = {
	uri: process.env.MONGO_URI!
};
