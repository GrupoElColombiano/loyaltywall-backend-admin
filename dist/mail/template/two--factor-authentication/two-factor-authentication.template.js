"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoFactorAuthHTML = void 0;
const twoFactorAuthHTML = (name, email, url) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Autenticación de doble factor</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.4;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #fff;
          border-radius: 6px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          color: #555;
          margin-bottom: 10px;
        }
        a {
          color: pink;
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Autenticación de doble factor</h1>
        <p>Hola ${name},</p>
        <p>Estás a un paso de completar la autenticación de doble factor para tu cuenta con el correo electrónico ${email}.</p>
        <p>Haz clic en el siguiente enlace para continuar el proceso de autenticación de doble factor:</p>
        <p><a href="${url}">${url}</a></p>
        <p>Si no iniciaste este proceso, puedes ignorar este correo.</p>
        <p>Gracias,</p>
        <p>Tu aplicación</p>
      </div>
    </body>
  </html>
`;
exports.twoFactorAuthHTML = twoFactorAuthHTML;
//# sourceMappingURL=two-factor-authentication.template.js.map