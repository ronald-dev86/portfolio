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


// 4. Export a single `collections` object to register your collection(s)
export const collections = { data };