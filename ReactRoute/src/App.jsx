import{BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
import {Suspense} from 'react'; //Suspense is an api which is use to make asynchronous component fetching
const Dashboard = React.lazy(()=>  import('../components/Dashboard'));
const Landing =  React.lazy(()=>  import('../components/Dashboard'));
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();  // Now inside BrowserRouter

  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>Landing Page</button>
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
      </div>
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={"loading .."}><Dashboard /></Suspense>} />
        <Route path='/' element={<Suspense fallback={"loading .."}><Landing /></Suspense>} />
      </Routes>
    </div>
  );
}


export default App
