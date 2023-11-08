// components/SettingsOption1.js
import React from 'react';
import styled from 'styled-components';
import studentImg from "../img/student.png"
import Normal_personImg from "../img/normal.png"


const OptionContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin-top: 10px;
  border-radius: 4px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display:grid;
  grid-template-columns: 1fr 1fr;
  height: 30vh;
`;

const Persontype = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-weight:bolder;
    `;

const Person = styled.img`
width:50%;
height:50%;
`;



const SettingsOption4 = () => {
  return (
    <OptionContainer>
                <Persontype>
                    학생<Person src={studentImg} alt=""/>
                </Persontype>
                <Persontype>
                    일반인<Person src={Normal_personImg} alt=""/>
                </Persontype>
    </OptionContainer>
  );
};

export default SettingsOption4;
