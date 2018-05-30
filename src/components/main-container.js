import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './main-container.css'

import { ConnectedPostFeed } from './post-feed'
import { ConnectedSinglePost } from './single-post'

export function MainContainer () {
  return (
    <main className='main-container'>
      <Switch>
        <Route exact path="/" component={ConnectedPostFeed}/>
        <Route exact path="/:postId" component={ConnectedSinglePost}/>
      </Switch>
    </main>
  )
}
