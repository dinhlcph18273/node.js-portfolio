import Skill from "../models/skill"

export const listSkill = async(req, res) => {
    try {
        const skill = await Skill.find();
        res.json(skill)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}
export const readSkill = async(req, res) => {
    const fillter = {_id: req.params.id}
    try {
        const skill = await Skill.findOne(fillter);
        res.json(skill)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}

export const createSkill = async(req, res) => {
    try {
        const skill = await new Skill(req.body).save();
        res.json(skill)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}

export const editSkill = async(req, res) => {
    const fillter = {_id: req.params.id}
    const document = req.body
    const option = {new : true}
    try {
        const skill = await Skill.findOneAndUpdate(fillter,document,option);
        res.json(skill)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}
export const removeSkill = async(req, res) => {
    const fillter = {_id: req.params.id}
    try {
        const skill = await Skill.findOneAndRemove(fillter);
        res.json(skill)
    } catch (error) {
        res.status(400).json({
            message: "khong thuc hien duoc"
        })
    }
}