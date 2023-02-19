import React from 'react'
import { Link } from 'gatsby'
import type { FC, ReactNode } from 'react'
import Footer from './Footer'

interface Props {
  location: Location
  title: string
  children: ReactNode
}

const Layout: FC<Props> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className='text-5xl'>
        <Link to='/'>{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className='header-link-home' to='/'>
        {title}
      </Link>
    )
  }

  return (
    <div
      className='flex flex-col justify-between h-screen bg-blue-900'
      data-is-root-path={isRootPath}
    >
      <div className='flex flex-col'>
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
