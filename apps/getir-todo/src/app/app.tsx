import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from './state/actions/todos.action';

export const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  console.log(state);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to getir-todo!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Extensible Build Framework"
        />
      </div>
    </>
  );
};

export default App;
