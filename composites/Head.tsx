import React from 'react'
import { default as NextHeaed }from 'next/head'

type HeadProps = {
  title?: string,
  description?: string,
  image?: string,
  imageTwitter?: string,
  keywords?: string
}

export default function Head({ 
  title = 'Julian Furchert', 
  description = 'Software Engineer with a soft spot for design systems and user interfaces.', 
  image = '/og-img/og-image-home.png', 
  imageTwitter = '/og-img/twitter-image-home.png', 
  keywords = 'React, Design System, Creative Coding'
}: HeadProps) {

  image = 'https://www.julianfurchert.com' + image

  return (
    <NextHeaed>
      <title>{title}</title>
      <meta name="title" content={title} /> 
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}  />
      <meta property="og:title" content={title} />    
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageTwitter} />
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@JFurchert" />
    </NextHeaed>
  )
}
