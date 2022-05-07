import Profile from "../models/profile"

export const listProfile = async(req, res) => {
    try {
        const profile = await Profile.find();
        res.json(profile)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}

export const readProfile = async(req, res) => {
    const fillter = {_id: req.params.id}
    try {
        const profile = await Profile.findOne(fillter);
        res.json(profile)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}

export const createProfile = async(req, res) => {
    try {

        const profile = await new Profile(req.body).save();
        console.log(profile);
        res.json(profile)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}

export const editProfile = async(req, res) => {
    const fillter = {_id: req.params.id}
    const document = req.body
    const option = {new : true}
    try {
        const profile = await Profile.findOneAndUpdate(fillter,document,option);
        res.json(profile)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}
export const removeProfile = async(req, res) => {
    const fillter = {_id: req.params.id}
    try {
        const profile = await Profile.findOneAndRemove(fillter);
        res.json(profile)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}