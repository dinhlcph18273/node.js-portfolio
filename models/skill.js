import mongoose,{Schema} from "mongoose";


const skillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    img2:{
        type: String
    },
    desc: {
        type: String,
        required: true
    }
})

export default mongoose.model("Skill",skillSchema)