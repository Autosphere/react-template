// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'

import img from 'src/styles/images.css'
import sprites from 'src/styles/sprites.css'
import css from './Home.style.css'
import type { ReduxProps } from './Home.index'

type Props = ReduxProps

const Home = (props: Props): React$Element<*> => {

  const {
    authenticated,
    logout,
  } = props

  const logoutButton = authenticated
    ? <button onClick={logout}>Logout</button>
    : null

  return (
    <div className={css.home}>
      <Helmet title="Home" />
      This is the app...
      <ul>
        <li>This is a test item</li>
      </ul>
      <Link to="/profile">
        <div className={img.logo} />
      </Link>
      <Link to="/todos">
        <div className={sprites.facebookIcon} />
      </Link>
      {logoutButton}
    </div>
  )

}


export default Home
