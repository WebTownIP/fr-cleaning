import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

export const Page = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};
