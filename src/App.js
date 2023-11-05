import Body from './component/Body';
import Header from './component/Header';
import { Outlet , RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import DiscountBanner from './component/DicountBanner';
import MenComponent from './component/MenComponent';
import WomenComponent from './component/WomenComponent';
import MainContainer from './component/MainContainer';
const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
 
    {
      path:"/",
      element:<MainContainer />,
    },
    {
      path: "/men" ,
      element: <MenComponent /> ,
    },
    {
      path: "/women" ,
      element: <WomenComponent />,
    }
  ]
}])

function App() {
  return (
    <div className="App">
      <Header />
      <DiscountBanner />
      {/* <Outlet /> */}
<RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
