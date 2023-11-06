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


function updateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // 월은 0부터 시작하기 때문에 +1을 해줍니다.
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // 10보다 작은 숫자 앞에 0을 추가합니다.
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 포맷에 맞게 문자열로 만듭니다.
    let timeString = `${year}년 ${month}월 ${date}일 |  ${hours}:${minutes}:${seconds}`;

    // HTML에 표시합니다.
    document.getElementById('clock').innerText = timeString;

    // 1분마다 업데이트 합니다.
    setTimeout(updateTime, 1000);
}

// 웹페이지 로딩시 함수를 호출하여 시간을 표시합니다.
updateTime();

