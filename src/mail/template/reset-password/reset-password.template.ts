export const resetPasswordHTML = (url: string) =>
  `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Restablecimiento de contraseña</title>
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
        <h1>Restablecimiento de contraseña</h1>
        <p>Hola,</p>
        <p>Haz clic en el siguiente enlace para <a href="${url}">restablecer tu contraseña</a>:</p>
        <p>Si no solicitaste restablecer tu contraseña, puedes ignorar este correo.</p>
        <p>Gracias,</p>
        <p>El Colombiano</p>
      </div>
    </body>
  </html>
`;
