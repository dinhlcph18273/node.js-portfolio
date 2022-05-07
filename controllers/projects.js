import Project from "../models/projects"

export const listProject = async(req,res)=>{
    try {
        const project = await Project.find()
        res.json(project)
    } catch (error) {
        console.log(error);
    }
}
export const createProject = async(req,res)=>{
    try {
        const project = await Project(req.body).save()
        res.json(project)
    } catch (error) {
        console.log(error);
    }
}

export const readProject = async(req,res)=>{
    const condition = {_id: req.params.id}
    try {
        const project = await Project.findOne(condition)
        res.json(project)
    } catch (error) {
        console.log(error);
    }
}


export const removeProject = async(req,res)=>{
    const condition = {_id: req.params.id}
    try {
        const project = await Project.findOneAndRemove(condition)
        res.json(project)
    } catch (error) {
        console.log(error);
    }
}

export const editProject = async(req,res)=>{
    const condition = {_id: req.params.id}
    const doc = req.body
    const option = {new: true}
    try {
        const project = await Project.findOneAndUpdate(condition,doc,option)
        res.json(project)
    } catch (error) {
        console.log(error);
    }
}
