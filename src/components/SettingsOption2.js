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

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  place-items: center;
  height: 25vh;
`;

const Categorybutton = styled.div`
grid-gap:20%;
color: color(srgb red green blue);
border-radius: 5px;
background-color: white;
width: 50%;
height: 50%;
border: 5px solid black;
font-weight: bolder;
display:flex;
justify-content: center;
align-items:center;
`;

const SettingsOption2 = () => {
  return (
    <OptionContainer>
              <Categorybutton>MOST</Categorybutton>
              <Categorybutton>WORLD</Categorybutton>
              <Categorybutton>ECONOMY</Categorybutton>
              <Categorybutton>TECHNOLOGY</Categorybutton>
    </OptionContainer>
  );
};

export default SettingsOption2;
