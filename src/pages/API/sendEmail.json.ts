import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { to, from, html, subject, text } = body;

        console.log({ to, from, html, subject, text });

        const response = await resend.emails.send({
            to,
            from,
            subject,
            html,
            text,
        });

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

