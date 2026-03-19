
import { Request, Response } from "express";
import { getAllResourcesAsync, getResourceByIdAsync, createResourceAsync } from "../services/resourceService";

export const getAllResources = (req: Request, res: Response) => {
    getAllResourcesAsync()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(500).json({ message: "Error fetching resources", error });
        });
};

export const getResourceById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || id < 1) {
        return res.status(400).json({ message: "Invalid resource ID" });
    }

    getResourceByIdAsync(id)
        .then((resource) => {
            if (!resource) {
                return res.status(404).json({ message: "Resource not found" });
            }
            res.status(200).json(resource);
        })
        .catch((error) => {
            res.status(500).json({ message: "Error fetching resource", error });
        });
};

export const createResource = (req: Request, res: Response) => {
    const { title, type, url, description } = req.body;
    if (!title || !type || !url || !description) {
        return res.status(400).json({ message: "Missing required resource fields" });
    }

    createResourceAsync({ title, type, url, description })
        .then((resource) => {
            res.status(201).json(resource);
        })
        .catch((error) => {
            res.status(500).json({ message: "Error creating resource", error });
        });
};

// export const updateResource = (req: Request, res: Response) => {
//     // Logic to update a resource
//     res.status(200).send("Update a resource");
// };

// export const deleteResource = (req: Request, res: Response) => {
//     // Logic to delete a resource
//     res.status(200).send("Delete a resource");
// };