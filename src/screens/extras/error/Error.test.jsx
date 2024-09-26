import React from 'react'
import { render, screen } from '@testing-library/react'
import Error from './Error'

test('renders error message', () => {
  render(<Error />)
  const h1 = screen.getByText('404')
  const h4 = screen.getByText(
    'Sorry the page you are looking for does not exist'
  )
  expect(h1).toBeInTheDocument()
  expect(h4).toBeInTheDocument()
})
