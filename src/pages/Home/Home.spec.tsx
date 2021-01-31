import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

describe('Home Component', () => {
  it('renders home text', () => {
    const { getByText } = render(<Home />)
    const homeText = getByText('home')
    expect(homeText).toBeInTheDocument()
  })
})
