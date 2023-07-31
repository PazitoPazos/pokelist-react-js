import { lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header/Header'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

const CardList = lazy(() => import('./components/CardList/CardList'))

function App () {
  return (
    <div className='App'>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <CardList />
      </Suspense>
    </div>
  )
}

export default App
