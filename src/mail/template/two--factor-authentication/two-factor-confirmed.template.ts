export const twoFactorAuthConfirmedHTML = (
  firstName: string,
  email: string,
) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Autenticación de doble factor confirmada</title>
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
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Autenticación de doble factor confirmada</h1>
        <p>Hola ${firstName},</p>
        <p>La autenticación de doble factor para tu cuenta con el correo electrónico ${email} ha sido confirmada correctamente.</p>
        <p>Desde ahora, podrás disfrutar de la seguridad adicional proporcionada por la autenticación de doble factor en tu cuenta.</p>
        <p>Si no realizaste esta confirmación, te recomendamos cambiar tu contraseña y revisar la seguridad de tu cuenta.</p>
        <p>Gracias por utilizar nuestro servicio.</p>
        <p>Atentamente,</p>
        <p>Tu aplicación</p>
      </div>
    </body>
  </html>
`;
