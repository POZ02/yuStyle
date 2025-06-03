// 커피 레시피 데이터
const coffeeData = {
  espresso: [
    { img: '에소프레소.png', name: '에소프레소', link: 'menupage/에소프레소.html' },
    { img: '아포가토.png', name: '아포가토', link:'menupage/아이스페퍼민트모카.html'},
    { img: '콘 파냐.png', name: '콘 파나' },
    { img: '사케라토 아포가토.png', name: '사케라토 아포가토' },
    { img: '솔티드에소프레소.png', name: '솔티드 캐러멜 에소프레소' },
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
    { img: '아이스 코코넛 커피.png', name: '아이스 코코넛 커피', link: 'menupage/아이스코코넛라테.html' },
    { img: '바닐라 크림 콜드 폼.png', name: '바닐라 콜드 폼 아이스 커피' },
    { img: '아이스 카라멜 라테.png', name: '아이스 카라멜 라테' },
    { img: '아이스 페퍼민트 모카.png', name: '아이스 페퍼민트 모카' },
    { img: '아이스 모카.png', name: '아이스 모카' },
    { img: '아이스 캐러멜 마키아토.png', name: '아이스 캐러멜 마키아토' }
  ]
};

const coffeeGrid = document.getElementById('coffeeGrid');
const navLinks = document.querySelectorAll('nav ul li a');
const searchInput = document.getElementById('searchInput');

let currentCategory = 'espresso';

function renderMenuList(menuList) {
  coffeeGrid.innerHTML = '';
  menuList.forEach(item => {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';

    const link = document.createElement('a');
    link.href = item.link || '#';

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;

    const name = document.createElement('p');
    name.textContent = item.name;

    link.appendChild(img);
    link.appendChild(name);
    menuDiv.appendChild(link);
    coffeeGrid.appendChild(menuDiv);
  });
}

function renderMenu(category) {
  currentCategory = category;
  renderMenuList(coffeeData[category]);
}

// 검색 필터
function filterMenuByKeyword(keyword) {
  const filtered = coffeeData[currentCategory].filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  renderMenuList(filtered);
}

// 탭 클릭 이벤트
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const category = link.dataset.category;

    if (coffeeData[category]) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      renderMenu(category);
      searchInput.value = '';
    }
  });
});

// 검색 이벤트
searchInput.addEventListener('input', e => {
  filterMenuByKeyword(e.target.value);
});

// 첫 로딩 시 초기화
renderMenu(currentCategory);
