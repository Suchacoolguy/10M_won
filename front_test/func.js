//설정화면 구성
// | 1. 세계시간 설정 | 2. 사용자 유형 설정 | 3. 관심사 카테고리 | 4. 화면밝기  |

function setting() {
    let mainSection = document.querySelector('.main-section');
    let footSection = document.querySelector('.foot-section');
    let settingSection = document.querySelector('.setting-section');

    if (settingSection.style.display === "none" || !settingSection.style.display) {
        mainSection.style.display = "none";
        footSection.style.display = "none";
        settingSection.style.display = "grid"; // grid layout로 설정
    } else {
        mainSection.style.display = "grid"; // grid layout로 설정
        footSection.style.display = "flex";
        settingSection.style.display = "none";
    }

    let contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = "none");
}

function showMenu(menuId) {
    let contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = "none"); // 모든 내용을 숨깁니다.

    let selectedContent = document.getElementById(menuId);
    selectedContent.style.display = "block"; // 선택된 메뉴의 내용만 보여줍니다.
}

// func.js

// function setting() {
//     const settingSection = document.querySelector('.setting-section');
//     const selectMenu = document.querySelector('.select-menu');
    
//     if (selectMenu.style.display === 'none' || selectMenu.style.display === '') {
//         selectMenu.style.display = 'flex';
//     } else {
//         selectMenu.style.display = 'none';
//     }
// }

// function showMenu(menuId) {
//     const menuContent = document.getElementById(menuId);
//     const settingSection = document.querySelector('.setting-section');
//     const selectMenu = document.querySelector('.select-menu');
    
//     // Hide all other menu content
//     document.querySelectorAll('.content').forEach(content => content.style.display = 'none');
    
//     // Show the selected menu content
//     menuContent.style.display = 'block';
//     settingSection.style.display = 'grid';

//     // Hide the toggle menu
//     selectMenu.style.display = 'none';
// }

// function applyChanges() {
//     const settingSection = document.querySelector('.setting-section');
    
//     // Hide the setting section
//     settingSection.style.display = 'none';
// }
