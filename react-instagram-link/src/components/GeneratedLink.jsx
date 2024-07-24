import React from 'react';
import { useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

const GeneratedLink = () => {
  const location = useLocation();
  const clipboard = useClipboard();

  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const instagram = params.get('instagram');
  const link = `${window.location.origin}/page?name=${encodeURIComponent(name)}&instagram=${encodeURIComponent(instagram)}`;

  return (
    <div>
      <h2>Generated Link</h2>
      <p>Here is your link:</p>
      <input type="text" value={link} readOnly />
      <button onClick={() => clipboard.copy(link)}>Copy Link</button>
    </div>
  );
};

export default GeneratedLink;
