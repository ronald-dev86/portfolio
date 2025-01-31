
import { defineMiddleware, sequence } from 'astro/middleware';


export const middleware = defineMiddleware(async (context, next) => {
    const token = context.cookies.get('__session');
    
    if(!token && context.url.pathname !== '/signin'){ 
        if(context.url.pathname === '/api/auth/signin'){
           return next();
        }
        return context.redirect('/signin');
    }

    context.locals.token = token?.value;
    return next();
});

export const onRequest = sequence(middleware);