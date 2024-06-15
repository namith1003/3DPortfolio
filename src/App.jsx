
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import { Home} from './pages';

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    </main>
  )
}

export default App