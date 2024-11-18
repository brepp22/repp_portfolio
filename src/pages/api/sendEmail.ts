import type { APIRoute } from "astro";
import { Resend } from "resend";

console.log("RESEND_API_KEY:", import.meta.env.RESEND_API_KEY);

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { name, userEmail, subject, message } = body;

        console.log({ name, userEmail, subject, message  });

        const response = await resend.emails.send({
            to: "brepp@hotmail.com",
            from: "noreply@brepp.dev" ,
            subject,
            html: `
                From: ${userEmail}
                Name: ${name}
                Subject: ${subject}
                Message: ${message}
                
            `,
        });
        
        console.log('Resend response:', response);

        if (response) {
            return new Response(
                JSON.stringify({
                    message: 'Email sent successfully!',
                }),
                {
                    status: 200,
                    statusText: "OK",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Allow-Origin": "https://www.brepp.dev",
                        "Access-Control-Allow-Headers": "Content-Type",
                    },
                }
            );
        } else {
            return new Response(
                JSON.stringify({
                    message: 'Failed to send email.',
                }),
                {
                    status: 500,
                    statusText: "Internal Server Error",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({
                message: 'An error occurred while sending the email.',
            }),
            {
                status: 500,
                statusText: "Internal Server Error",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
};

