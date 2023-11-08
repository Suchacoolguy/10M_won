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
`;

const Title = styled.h2`
  margin-bottom: 15px;
  color: #333;
`;

const TextInput = styled.input`
  color: #666;
`;

const Inpubtn = styled.button`
  color: #666;
`;


const SettingsOption3 = () => {
  return (
    <OptionContainer>
      <Title>Add your keyword</Title>
      <TextInput></TextInput>
      <Inpubtn>입력</Inpubtn>
      <Inpubtn>적용</Inpubtn>
      <Inpubtn>초기화</Inpubtn>
    </OptionContainer>
  );
};

export default SettingsOption3;
