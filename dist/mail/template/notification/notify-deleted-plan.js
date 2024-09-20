"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyDeletedPlanHTML = void 0;
const notifyDeletedPlanHTML = (name, email) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Notificación de finalización del plan adquirido para LoyaltyWall</title>
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
        <h1>Notificación de finalización del plan adquirido para LoyaltyWall</h1>
        <p>Hola ${name},</p>
        <p>Tu plan asociado al email ${email} de LoyaltyWall ha finalizado.</p>
        <p>Si necesitas renovar o adquirir un nuevo plan, por favor visita nuestro sitio web.</p>
        <p>Gracias,</p>
        <p>LoyaltyWall</p>
      </div>
    </body>
  </html>
`;
exports.notifyDeletedPlanHTML = notifyDeletedPlanHTML;
//# sourceMappingURL=notify-deleted-plan.js.map