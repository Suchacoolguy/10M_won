// src/App.js
import React, { useState } from 'react';
import './App.css';
import settingImg from "./imgs/settings.png"
import studentImg from "./imgs/student.png"
import Normal_personImg from "./imgs/normal.png"



function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    setActiveMenu('');
  };

  const renderContent = () => {
    if (showSettings) {
      switch (activeMenu) {
        case 'world-time':
          return <div id="world-time" class="content">
          <div class="world-time">
              <button>서울(UTC+09)</button>
              <button>뉴욕(UTC-04)</button>
              <button>도쿄(UTC+09)</button>
              <button>런던(UTC+01)</button>
          </div>
      </div>;
        case 'user-info':
          return <div id="user-info" class="content">
          <div class="user-info">
              <div class="user-type">
                  학생<img className='personIMG' src={studentImg} alt=""/>
                </div>
              <div class="user-type">
                일반인<img className='personIMG' src={Normal_personImg} alt=""/>
              </div>
          </div>
      </div>;
        case 'category':
          return <div id="category" class="content">
          <div class="category">
              <button>MOST</button>
              <button>WORLD</button>
              <button>ECONOMY</button>
              <button>TECHNOLOGY</button>
          </div>
      </div>;
      case 'keyword':
        return <div id="keyword" class="content">
          <div className='keyword'>
              Add your keyword
              <div className='keyword-content'><input type='text'/>
              <button>입력</button>
              <button>적용</button>
              <button>초기화</button>
              </div>
          </div>
        </div>
        case 'bright':

          return <div id="bright" class="content">
              <div class="bright-bar">
                  <input
                    id="brightness-setter"
                    type="range"
                    min="15"
                    max="255"
                  />
                </div>
            </div>;
        default:
          return <div>설정 메뉴를 선택해주세요.</div>;
      }
    } else {
      return <div>기본 화면 내용</div>;
    }
  };

  return (
    <div className="container">
      <div className="top-section">
        <img className='setting_img'
          src={settingImg}
          alt="settings"
          onClick={toggleSettings}
        />
      </div>
      
      {showSettings && (
        <div className="settings-menu">
          <button onClick={() => setActiveMenu('world-time')}>세계 시간</button>
          <button onClick={() => setActiveMenu('user-info')}>사용자</button>
          <button onClick={() => setActiveMenu('category')}>카테고리</button>
          <button onClick={() => setActiveMenu('keyword')}>키워드</button>
          <button onClick={() => setActiveMenu('bright')}>화면밝기</button>
        </div>
      )}{renderContent()}
    </div>
  );
}

export default App;
