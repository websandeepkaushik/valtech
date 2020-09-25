import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Add, Home, Item } from './pages';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch({ type: 'FETCH_DEVELOPERSDATA', payload: '' });
  }, [dispatch]);
  
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/add" component={Add} />
      </Switch>
    </Router>
    <PageFooter><b>Developed by:</b> Sandeep Kaushik</PageFooter>
    </>
  );
}

export default App;

export const PageFooter = styled.div`
 text-align: center;
 padding: 10px 0;
`;