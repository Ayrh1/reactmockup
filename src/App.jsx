
import Header from './components/Header';
 // Assuming you have a Header component
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      {/* Outlet component will render the current route's component */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;