import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed",
        });
    }

    try {
        const { name, surname, email, message } = req.body;

        if (!name || !surname || !email || !message) {
            return res.status(422).json({
                success: false,
                message: "Tutti i campi sono obbligatori",
            });
        }

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "giuseppepisani2@gmail.com",
            replyTo: email,
            subject: `Nuovo contatto dal portfolio — ${name} ${surname}`,
            text: `
                Nome: ${name}
                Cognome: ${surname}
                Email: ${email}

                Messaggio:

                ${message}
            `,
        });

        return res.status(200).json({
            success: true,
            message: "Messaggio inviato correttamente",
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return res.status(500).json({
            success: false,
            message: "Errore durante l'invio del messaggio",
        });
    }
}
