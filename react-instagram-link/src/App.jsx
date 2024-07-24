import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import GeneratedLink from './components/GeneratedLink';
import Page from './components/Page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/generated-link" element={<GeneratedLink />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
