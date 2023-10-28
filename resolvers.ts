import { Request, Response } from "npm:express@4.18.2";
import DiscModel from "./models.ts";

//obtener todos los discos existentes
export const getDiscs = async (req: Request, res: Response) => {
    try{
        const allDisc= await DiscModel.find().exec(); // buscamos todos los discos sin filtros
        res.send(allDisc);
    }catch (error){
        res.status(500).send(error.message);
    }
    return;
}

//buscar disco mediante id
export const getDiscByID = async (req: Request, res: Response) => {
    try{
        const disc= await DiscModel.findById(req.params.id).exec(); //buscamos el disco por id
        res.send(disc);
    }catch (error){
        res.status(500).send(error.message);
    }
}

//obtener listado de discos según nombre
export const getDiscByName = async (req: Request, res: Response) => {
    try{
        const disc= await DiscModel.find({name: req.params.name}).exec();//buscamos disco por nombre
        res.send(disc);
    }catch (error){
        res.status(500).send(error.message);
    }
}

//obtener listado segun formato
export const getDiscByFormat = async (req: Request, res: Response) => {
    try{
        const disc= await DiscModel.find({format: req.params.format}).exec(); // buscamos disco por formato
        res.send(disc);
    }catch (error){
        res.status(500).send(error.message);
    }
}

//obtener listado de disco por pais de impresion
export const getDiscByCountry = async (req: Request, res: Response) => {
    try{
        const disc= await DiscModel.find({country: req.params.country}).exec(); // buscamos disco por pais
        res.send(disc);
    }catch (error){
        res.status(500).send(error.message);
    }
}

//crear un nuevo disco
export const addDisc = async (req: Request, res: Response) => {
    if(!req.body.name || !req.body.author || !req.body.format || !req.body.country || !req.body.art){
        res.status(400).send("Bad request: missing name, author, format, country or art");
        return;
    }
    try{
        const  discFound= await DiscModel.findOne({name: req.body.name}).exec(); // buscamos si existe un disco con el mismo nombre
        if(discFound){
            res.status(400).send("Error: disc name already exists");
            return;
        }
        const disc= new DiscModel(req.body);
        const result= await disc.save();
        res.send(result);
    }catch (error){
        res.status(500).send(error.message);
    }
}

//actualizar un disco
export const updateDisc = async (req: Request, res: Response) => {
    try{
        const disc= await DiscModel.findByIdAndUpdate(req.params.id, req.body).exec();//buscamos disco por id y lo actualizamos
        res.send(disc);
    }catch (error){
        res.status(500).send(error.message);
    }
}

//eliminar un disco
export const deleteDisc = async (req: Request, res: Response) => {
    try{
        const disc= await DiscModel.findByIdAndDelete(req.params.id).exec();//buscamos disco por id y lo eliminamos
        res.send(disc);
    }catch (error){
        res.status(500).send(error.message);
    }
}

