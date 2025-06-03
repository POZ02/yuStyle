// 카테고리별 커피 레시피 데이터
const coffeeData = {
  espresso: [
    { img: '에소프레소.png', name: '에스프레소' },
    { img: '아포가토.png', name: '아포가토' },
    { img: '콘 파냐.png', name: '콘 파나' },
    { img: '사케라토 아포가토.png', name: '사케라토 아포가토' },
    { img: '솔티드에소프레소.png', name: '솔티드 캐러멜 에스프레소' },
    { img: '아메리카노.png', name: '아메리카노' }
  ],
  latte: [
    { img: '아이스아몬드라테.png', name: '아이스 아몬드 라테' },
    { img: '메이플카페오레.png', name: '메이플 카페오레' },
    { img: '토피넛 라테.png', name: '토피넛 라테' },
    { img: '아이스 라테.png', name: '아이스 라테' },
    { img: '바닐라 라테.png', name: '바닐라 라테' },
    { img: '너트멕 라테.png', name: '너트멕 라테' }
  ],
  ice: [
    { img: '아이스 코코넛 커피.png', name: '아이스 코코넛 커피' },
    { img: '바닐라 크림 콜드 폼.png', name: '바닐라 콜드 폼 아이스 커피' },
    { img: '아이스 카라멜 라테.png', name: '아이스 카라멜 라테' },
    { img: '아이스 페퍼민트 모카.png', name: '아이스 페퍼민트 모카' },
    { img: '아이스 모카.png', name: '아이스 모카' },
    { img: '아이스 캐러멜 마키아토.png', name: '아이스 캐러멜 마키아토' }
  ]
};

// 요소 가져오기
const coffeeGrid = document.getElementById('coffeeGrid');
const navLinks = document.querySelectorAll('nav a');

// 메뉴 렌더링 함수
function renderMenu(category) {
  // 메뉴 초기화
  coffeeGrid.innerHTML = '';

  // 데이터 가져와서 하나씩 추가
  coffeeData[category].forEach(item => {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;

    const name = document.createElement('p');
    name.textContent = item.name;

    menuDiv.appendChild(img);
    menuDiv.appendChild(name);
    coffeeGrid.appendChild(menuDiv);
  });
}

// 메뉴 탭 클릭 시 처리
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // 탭 active 클래스 변경
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // 선택된 카테고리 가져와서 렌더링
    const category = link.dataset.category;
    renderMenu(category);
  });
});

// 기본 에스프레소 메뉴 렌더링
renderMenu('espresso');
