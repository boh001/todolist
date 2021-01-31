import Cleave from 'cleave.js/react'
import React, { useState } from 'react'

const Home = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <Cleave options={{ creditCard: true }} />
    </div>
  )
}

export default Home
