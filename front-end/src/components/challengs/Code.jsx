import { useRef, useContext, useState } from 'react';
import { ApiContext } from '../../context/ApiContext';


export default function Code({ children }) {
  return (
    <div className="w-full h-full bg-gradient-light p-10">
      <div className="w-full flex justify-center">
        <div className="title-wrapper">
          <h1 className="sweet-title">
            <span data-text="Code">Code</span>
            <span data-text="Quest">Quest</span>
          </h1>
        </div>
      </div>
      {children}
    </div>
  );
}
