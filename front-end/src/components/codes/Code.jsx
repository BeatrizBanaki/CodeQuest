import { useRef, useContext, useState } from 'react';
import { ApiContext } from '../../context/ApiContext';
import Question1 from './Question1';

export default function Code() {
  const { text, setText } = useContext(ApiContext);


  return (
    <div className="w-full h-full bg-gradient-orange p-10">
      <div className="title-wrapper">
        <h1 class="sweet-title">
          <span data-text="Code">Code</span>
          <span data-text="Quest">Quest</span>
        </h1>
      </div>
      <Question1></Question1>
    </div>
  );
}
