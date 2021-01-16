import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const SEO = () => {
  const location = useLocation()
  return (
    <Helmet>
      <meta />
      <title>My title</title>
    </Helmet>
  )
}
export default SEO
