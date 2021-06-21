import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

function App() {
  

  return (
    <div className="App">
      <h1 style={{ marginLeft:600}}>new React app</h1>
      <Layout >
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
