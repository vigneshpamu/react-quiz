import { useEffect } from 'react'
import Header from './Header'
import Main from './Main'

function App() {
  useEffect(function () {
    fetch(`http://localhost:3000/questions`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  )
}

export default App
