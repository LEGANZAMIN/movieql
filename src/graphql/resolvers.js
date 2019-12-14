import { getMovies, getMovie, getSuggestion } from '../db/db'


const resolvers = {
    Query: {
        movies: (root, args, context, info) => getMovies( args.limit, args.minimum_rating),
        movie:(root, args, context, info) => getMovie(args.id),
        suggestions:(root, args, context, info) => getSuggestion(args.id)     
        
    }
};





export default resolvers; 