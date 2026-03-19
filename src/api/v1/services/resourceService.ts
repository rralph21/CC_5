
export interface Resource {
    id: number;
    title: string;
    type: string;
    url: string;
    description: string;
    createdAt: Date;
}

const resources: Resource[] = [
    {
        id: 1,
        title: "Express.js Guide",
        type: "documentation",
        url: "https://expressjs.com/en/guide",
        description: "Official Express.js documentation",
        createdAt: new Date()
    },
    {
        id: 2,
        title: "TypeScript Basics",
        type: "video",
        url: "https://example.com/ts-basics",
        description: "Introduction to TypeScript",
        createdAt: new Date()
    },
    {
        id: 3,
        title: "REST API Design",
        type: "article",
        url: "https://example.com/rest-design",
        description: "Best practices for REST API design",
        createdAt: new Date()
    },
    {
        id: 4,
        title: "Jest Testing Tutorial",
        type: "tutorial",
        url: "https://example.com/jest-tutorial",
        description: "Complete guide to testing with Jest",
        createdAt: new Date()
    }
];


export const getAllResourcesAsync = (): Promise<Resource[]> => {
    // Return a promise resolving to the whole in-memory resources list
    return Promise.resolve(resources) ;
};

export const getResourceByIdAsync = (id: number): Promise<Resource | undefined> => {
    // Find the matching resource by id
    return Promise.resolve(resources.find((resource) => resource.id === id));
};

export const createResourceAsync = (resourceData: Omit<Resource, 'id' | 'createdAt'>): Promise<Resource> => {
    const newId = resources.length > 0 ? Math.max(...resources.map((r) => r.id)) + 1 : 1;
    const newResource: Resource = {
        id: newId,
        createdAt: new Date(),
        ...resourceData
    };
    resources.push(newResource);
    return Promise.resolve(newResource);
};

// export const updateResource = (id: number, resource: string): string => {
//     // Logic to update a resource in the database
//     return "Resource updated";
// };

// export const deleteResource = (id: number): string => {
//     // Logic to delete a resource from the database
//     return "Resource deleted";
// };
