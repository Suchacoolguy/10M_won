// components/SettingsOption1.js
import React from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin-top: 10px;
  border-radius: 4px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

// Styled component for the slider
const GreenSlider = styled.input`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #ddd; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;

  &:hover {
    opacity: 1; /* Fully opaque on hover */
    border:2px dotted black;
  }

  /* The slider handle (use webkit for Chrome, Edge, and Safari) */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Width of the handle */
    height: 25px; /* Height of the handle */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
    border-radius: 50%; /* Circular border */
    border: 3px solid #fff; /* White border */
  }

  &::-moz-range-thumb {
    width: 25px; /* Width of the handle */
    height: 25px; /* Height of the handle */
    cursor: pointer; /* Cursor on hover */
    border-radius: 50%; /* Circular border */
    border: 3px solid #fff; /* White border */
  }
`;



const SettingsOption5 = () => {
  return (
    <OptionContainer>
      <GreenSlider
        id="brightness-setter"
        type="range"
        min="15"
        max="255"
      />
    </OptionContainer>
  );
};

export default SettingsOption5;
