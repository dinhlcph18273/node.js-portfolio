
import mongoose,{Schema} from "mongoose"

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    exp: {
         type: String,
        required: true
    }
})

export default mongoose.model("Profile", profileSchema)