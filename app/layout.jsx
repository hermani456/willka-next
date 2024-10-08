import "./globals.css";

export const metadata = {
  title: "Servicios Wilko",
  description:
    "En Servicios Wilko ofrecemos servicios de hospedaje, alimentación, transporte, limpieza, seguridad y fumigación para la región de Tarapacá.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
