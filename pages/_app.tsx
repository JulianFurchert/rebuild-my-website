import React from 'react';
import { Layout } from '../composites/Layout';
import { darkTheme } from '../stitches.config';
// import { Analytics } from '@vercel/analytics/react';
import useDarkMode from 'use-dark-mode';
import '../styles.css'

const darkModeConfig = {
  classNameDark: darkTheme.toString(),
  classNameLight: 'theme-default'
}

export default function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false, darkModeConfig);
  
  return (
    <Layout toggleTheme={() =>  darkMode.toggle()}> 
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </Layout>
  )
}