// components/SettingsMenu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SettingsOption1 from './SettingsOption1';
import SettingsOption2 from './SettingsOption2';
import SettingsOption3 from './SettingsOption3';
import SettingsOption4 from './SettingsOption4';
import SettingsOption5 from './SettingsOption5';


const MenuContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr
`;

const MenuItem = styled.button`
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    color: color(srgb red green blue);
    border-radius: 5px;
    cursor: pointer;
    font-size: 5%;
    background-color: white;
    width: 80%;
    height: 70%;
    border: 5px solid black;
    font-weight: bolder;
`;

const ContentContainer = styled.div`
  grid-column:1/ span 6
`;

// 각 설정 화면에 해당하는 컴포넌트를 임포트합니다.

const SettingsMenu = () => {
  // 선택된 메뉴 탭을 추적하는 상태
  const [selectedTab, setSelectedTab] = useState('option1');

  // 선택된 탭에 따라 컨텐츠를 렌더링하는 함수
  const renderContent = () => {
    switch (selectedTab) {
      case 'option1':
        return <SettingsOption1 />;
      case 'option2':
        return <SettingsOption2 />;
      case 'option3':
        return <SettingsOption3 />;
      case 'option4':
        return <SettingsOption4 />;
        case 'option5':
        return <SettingsOption5 />;
        
      default:
        return <div>Select a menu option</div>;
    }
  };

  return (
    <MenuContainer>

      <MenuItem onClick={() => setSelectedTab('option1')}>세계시간</MenuItem>
      <MenuItem onClick={() => setSelectedTab('option2')}>카테고리</MenuItem>
      <MenuItem onClick={() => setSelectedTab('option3')}>키워드 설정</MenuItem>
      <MenuItem onClick={() => setSelectedTab('option4')}>사용자 설정</MenuItem>
      <MenuItem onClick={() => setSelectedTab('option5')}>화면 밝기</MenuItem>
      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </MenuContainer>
  );
};

export default SettingsMenu;
