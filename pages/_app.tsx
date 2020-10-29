import React from 'react';
import { Layout } from '../composites/Layout';
import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}