import type { Metadata } from 'next';
import '../styles/globals.scss';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: "Sehee's Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
