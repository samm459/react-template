import * as React from 'react'
import { App } from './App'
import { render } from '@testing-library/react'

describe('App', () => {
  test('renders', () => {
    expect(() => render(<App />)).not.toThrow()
  })
})
