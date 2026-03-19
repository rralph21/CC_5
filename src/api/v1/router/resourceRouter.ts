import { Router } from 'express';
import { getAllResources, getResourceById, createResource } from "../controller/resourceController";

const router: Router = Router();

router.get("/resources", getAllResources);
router.get("/resources/:id", getResourceById);
router.post("/resources", createResource);

// router.put("/resources/:id", updateResource);
// router.delete("/resources/:id", deleteResource);

export default router;


