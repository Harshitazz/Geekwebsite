import React from 'react';

function BGSphere({ width, height, x, y, color }) {
   return (
      <div className="bgsphere" style={{
         width: width,
         height: height,
         position: 'absolute',
         left: x,
         top: y,
         borderRadius: '50%',
         background: color,
         filter: 'blur(110px)',
         overflow: 'hidden',
         zIndex: -1,
         transform: 'translate(-50%, -50%)'
      }}></div>
   )
}

// Use template literals to embed the CSS media query within the JavaScript file
const styles = `
  @media (max-width: 700px) {
    .bgsphere {
      display:none
    }
  }
`;

// Inject the styles into the document using a <style> tag
function addStyles() {
  const styleEl = document.createElement('style');
  styleEl.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleEl);
}

// Call the function to inject styles when the component file is executed
addStyles();

export default BGSphere;
