import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config'; 

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 1. Validation basique
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Veuillez remplir tous les champs obligatoires." });
  }

  try {
    // 2. Configuration de l'envoyeur d'email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ---------------------------------------------------------
    // 3A. EMAIL POUR L'ADMINISTRATEUR (L'équipe Wajed)
    // ---------------------------------------------------------
    const mailToAdmin = {
      from: `"Contact App Wajed" <${process.env.EMAIL_USER}>`,
      replyTo: email, 
      to: process.env.EMAIL_USER, 
      subject: `🚨 Nouveau message : ${subject || 'Sans sujet'}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 style="color: #4C9580;">Nouveau message de contact - Wajed</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; font-style: italic;">
            ${message}
          </p>
        </div>
      `,
    };

    // ---------------------------------------------------------
    // 3B. EMAIL POUR L'UTILISATEUR (Confirmation de réception)
    // ---------------------------------------------------------
    const mailToUser = {
      from: `"Wajed Support" <${process.env.EMAIL_USER}>`,
      to: email, 
      subject: `Confirmation de réception - Wajed / تأكيد استلام - واجد`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; text-align: center;">
          <h2 style="color: #4C9580;">Bonjour ${name} !</h2>
          <p>Nous avons bien reçu votre message concernant <strong>"${subject}"</strong>.</p>
          <p>Notre équipe va le traiter et vous répondra dans les plus brefs délais.</p>
          <br/>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <br/>
          <h2 style="color: #4C9580;" dir="rtl">مرحباً ${name} !</h2>
          <p dir="rtl">لقد تلقينا رسالتك بخصوص <strong>"${subject}"</strong>.</p>
          <p dir="rtl">سيقوم فريقنا بمعالجتها والرد عليك في أقرب وقت ممكن.</p>
          <br/>
          <p style="color: #888; font-size: 12px; margin-top: 30px;">
            L'équipe Wajed - فريق واجد
          </p>
        </div>
      `,
    };

    // 4. Envoi des deux emails
    await Promise.all([
      transporter.sendMail(mailToAdmin),
      transporter.sendMail(mailToUser)
    ]);

    // 5. Réponse de succès au Frontend React
    res.status(200).json({ success: true, message: "Emails envoyés avec succès !" });

  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    res.status(500).json({ error: "Une erreur s'est produite lors de l'envoi des emails." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur Backend démarré sur le port ${PORT} (Mode ES Modules)`);
});