import React from 'react'
import type { FC } from 'react'

const Footer: FC = () => (
  <footer className='bg-blue-500 text-center py-5'>
    © {new Date().getFullYear()}, Built with{' '}
    <a href='https://www.gatsbyjs.com'>Gatsby</a>
  </footer>
)

export default Footer
