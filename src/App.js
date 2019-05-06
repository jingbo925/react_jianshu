import React from 'react';
import  {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import { GlobalStyle } from './style';
import { Iconfont} from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle/>
        <Iconfont/>
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail} ></Route>
          </div>
        </BrowserRouter>
      </div>
       


    </Provider>
  );
}

export default App;
