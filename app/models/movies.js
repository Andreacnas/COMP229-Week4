import mongoose from "mongoose"

const Schema = mongoose.Schema;

const MovieSchema = new Schema({//json object
    //parameters: properties
    name: String,
    year: String,
    director: String,
    genre: String,
    runtime: Number
}, {
    //parameters: options
    timestamps: true,
    collection: 'movies'
});

export default mongoose.model('Movies', MovieSchema);