import React from 'react';
import Home from './components/Home';
import PostState from './context/posts/postState';
import Posts from './components/Posts';



function App() {
  return (
    <PostState>
      <Home/>
      <Posts/>
    </PostState>

  );
}

export default App;
