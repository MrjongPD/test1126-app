let selectedColor = 'black';
let selectedMonth = 4;

// 달력 생성 함수
function updateCalendar() {
    const monthSelect = document.getElementById('month-select');
    selectedMonth = parseInt(monthSelect.value);
    const calendarTitle = document.getElementById('calendar-title');
    calendarTitle.textContent = `${selectedMonth}월 휴건문`;

    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    // 해당 월의 일수 계산 (간단하게 30일로 가정, 실제로는 윤년 등 고려 필요)
    const daysInMonth = selectedMonth === 2 ? 28 : 30;
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        dayDiv.style.backgroundColor = selectedColor;
        calendar.appendChild(dayDiv);
    }
}

// 색상 선택 함수
function selectColor(color) {
    selectedColor = color;
    updateCalendar();
}

// 테마 업데이트 함수
function updateTheme() {
    const fresh = document.getElementById('fresh').checked;
    const clean = document.getElementById('clean').checked;
    const friendly = document.getElementById('friendly').checked;
    const warm = document.getElementById('warm').checked;

    const themeText = document.getElementById('theme-text');
    const themeColors = document.querySelectorAll('.color-dot');

    if (fresh) {
        themeText.textContent = '산뜻한 느낌 기운';
        themeColors[0].style.backgroundColor = 'orange';
        themeColors[1].style.backgroundColor = 'yellow';
        themeColors[2].style.backgroundColor = 'green';
    } else if (clean) {
        themeText.textContent = '정결한 느낌 기운';
        themeColors[0].style.backgroundColor = 'white';
        themeColors[1].style.backgroundColor = 'lightblue';
        themeColors[2].style.backgroundColor = 'gray';
    } else if (friendly) {
        themeText.textContent = '친근적인 느낌 기운';
        themeColors[0].style.backgroundColor = 'pink';
        themeColors[1].style.backgroundColor = 'lightgreen';
        themeColors[2].style.backgroundColor = 'yellow';
    } else if (warm) {
        themeText.textContent = '푸근한 느낌 기운';
        themeColors[0].style.backgroundColor = 'brown';
        themeColors[1].style.backgroundColor = 'orange';
        themeColors[2].style.backgroundColor = 'red';
    } else {
        themeText.textContent = '테마를 선택하세요';
        themeColors[0].style.backgroundColor = 'gray';
        themeColors[1].style.backgroundColor = 'gray';
        themeColors[2].style.backgroundColor = 'gray';
    }
}

// 설정 적용 함수
function applySettings() {
    updateCalendar();
    updateTheme();
    alert('설정이 적용되었습니다!');
}

// 페이지 로드 시 초기 달력 생성
window.onload = function() {
    updateCalendar();
};