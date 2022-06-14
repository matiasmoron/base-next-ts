import { ReactNode } from 'react';
import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
