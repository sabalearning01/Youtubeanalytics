// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Leftsidebar from './Components/Leftsidebar';
// import Rightsidebar from './Components/Rightsidebar';
// import Header from './Components/Header';
// import Dashboard from './Pages/Dashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <div style={{ display: 'flex' }}> {/* Sidebar Layout */}
//         <Leftsidebar />
//         <div style={{ flex: 1 }}> {/* Main Content Area */}
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//           </Routes>
//         </div>
//         <Rightsidebar />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
