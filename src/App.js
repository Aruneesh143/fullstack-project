import {Routes,Route} from 'react-router-dom'


import Signup from './Admin/Signup';
import Signin from './Admin/Signin';
import Dashboard from './Admin/Dashboard';
import EditProduct from './Admin/EditProduct';
import AddProduct from './Admin/AddProduct';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Signin/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>

        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/Dashboard/edit/:productId' element={<EditProduct/>}/>
        <Route exact path='/Dashboard/add' element={<AddProduct/>}/>
      </Routes>
  );
}

export default App;
