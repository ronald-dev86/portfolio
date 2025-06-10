import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';



const data = defineCollection({ 
    loader:  glob({ pattern: "tecnology.json", base: "./src/data/" }),
    schema: z.object({
        data:z.array(
            z.object({
                type: z.string(),
                selected: z.boolean(),
                skills: z.array(
                    z.object({
                        label: z.string(),
                        image: z.string(),
                    })
                )
            })
        )
    })            
});

const items = defineCollection({
    loader:  glob({ pattern: "projects.json", base: "./src/data/" }),
    schema: z.object({
        items:z.array(
            z.object({
                name: z.string(),
                description: z.string(),
                image: z.string(),
                repositories: z.array(
                    z.object({
                        link: z.string(),
                        icon: z.string(),
                    })
                )
            })
        )
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { data , items };