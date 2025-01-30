import { defineCollection, reference, z } from 'astro:content';
import { UsersTypes } from '../common/users.interface';

export const users = defineCollection({
    schema: z.object({
        uid: z.string(),
        type: z.nativeEnum(UsersTypes),
        menu: z.array(z.any()),
    }),
    type: 'content',
});