import mongoose, {Schema} from "mongoose";

const projectSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    size: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

export default mongoose.model("Project",projectSchema)