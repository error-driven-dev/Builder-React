import "./App.css"
import { BurgerBuilder } from "./components/BurgerBuilder"
import { Layout } from "./components/Layout/Layout"

function App() {
  return (
    <div className='App'>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  )
}

export default App
