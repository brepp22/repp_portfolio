import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend (import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async({ 
params, request}) => {
    const body = await request.json();
    const { to, from, html, subject, text } = body;
    console.log({to, from, html, subject, text})


    return new Response(
        JSON.stringify({
          name: 'Astro',
          url: 'https://astro.build/'
        })
      );
    
    };
