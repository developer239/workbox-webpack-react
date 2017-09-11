import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import About from 'pages/About'
import Counter from 'pages/Counter'


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </main>
)

export default Main
