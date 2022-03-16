import {Request, Response} from "express";

/**
 * @file Declares RESTful API for Tuit resource
 */
export default interface TuitControllerI {
    findAllTuits(req: Request, res: Response): void;
    findTuitById(req: Request, res: Response): void;
    findTuitsByUser(req: Request, res: Response): void;
    createTuitByUser (req: Request, res: Response): void;
    updateTuit(req: Request, res: Response): void;
    deleteTuit(req: Request, res: Response): void;
}