import { Router } from 'express';
import { getAllResources, getResourceById, createResource } from "../controller/resourceController";

const router: Router = Router();

/**
 * @openapi
 * /resources:
 *   get:
 *     summary: Get all resources
 *     tags:
 *       - Resources
 *     responses:
 *       200:
 *         description: List of resources
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resource'
 *             examples:
 *               example:
 *                 summary: A list of resources
 *                 value:
 *                   - id: 1
 *                     title: "Express.js Guide"
 *                     type: "documentation"
 *                     url: "https://expressjs.com/en/guide"
 *                     description: "Official Express.js documentation"
 *                     createdAt: "2025-12-30T12:34:56.789Z"
 *                   - id: 2
 *                     title: "TypeScript Basics"
 *                     type: "video"
 *                     url: "https://example.com/ts-basics"
 *                     description: "Introduction to TypeScript"
 *                     createdAt: "2025-12-29T10:21:00.000Z"
 *       500:
 *         description: Server error
 */
router.get("/resources", getAllResources);

/**
 * @openapi
 * /resources/{id}:
 *   get:
 *     summary: Get a resource by id
 *     tags:
 *       - Resources
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric id of the resource to get
 *     responses:
 *       200:
 *         description: Single resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *             examples:
 *               example:
 *                 summary: A single resource
 *                 value:
 *                   id: 1
 *                   title: "Express.js Guide"
 *                   type: "documentation"
 *                   url: "https://expressjs.com/en/guide"
 *                   description: "Official Express.js documentation"
 *                   createdAt: "2025-12-30T12:34:56.789Z"
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Not found
 *       500:
 *         description: Server error
 */
router.get("/resources/:id", getResourceById);

/**
 * @openapi
 * /resources:
 *   post:
 *     summary: Create a new resource
 *     tags:
 *       - Resources
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewResource'
 *           examples:
 *             example:
 *               summary: New resource payload
 *               value:
 *                 title: "Jest Testing Tutorial"
 *                 type: "tutorial"
 *                 url: "https://example.com/jest-tutorial"
 *                 description: "Complete guide to testing with Jest"
 *     responses:
 *       201:
 *         description: Created resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *             examples:
 *               example:
 *                 summary: Created resource response
 *                 value:
 *                   id: 5
 *                   title: "Jest Testing Tutorial"
 *                   type: "tutorial"
 *                   url: "https://example.com/jest-tutorial"
 *                   description: "Complete guide to testing with Jest"
 *                   createdAt: "2025-12-30T13:00:00.000Z"
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post("/resources", createResource);

// router.put("/resources/:id", updateResource);
// router.delete("/resources/:id", deleteResource);

export default router;


