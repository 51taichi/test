// 拼好班 - 公共JavaScript文件
// 通用工具函数和全局逻辑

// ==================== 工具函数 ====================

// 显示Toast提示
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    document.body.removeChild(toast);
  }, duration);
}

// 显示加载状态
function showLoading() {
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.id = 'loading-overlay';
  overlay.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(overlay);
}

// 隐藏加载状态
function hideLoading() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    document.body.removeChild(overlay);
  }
}

// 格式化时间
function formatTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) {
    return '刚刚';
  } else if (diff < hour) {
    return Math.floor(diff / minute) + '分钟前';
  } else if (diff < day) {
    return Math.floor(diff / hour) + '小时前';
  } else if (diff < 7 * day) {
    return Math.floor(diff / day) + '天前';
  } else {
    return date.toLocaleDateString('zh-CN');
  }
}

// 格式化数字
function formatNumber(num) {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + 'w';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ==================== Tab导航切换 ====================
function initTabBar() {
  const tabItems = document.querySelectorAll('.tab-item');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // 页面映射
  const pageMap = {
    'index.html': 0,
    'my-projects.html': 1,
    'messages.html': 2,
    'profile.html': 3
  };

  // 设置当前激活的Tab
  const activeIndex = pageMap[currentPage] || 0;
  if (tabItems[activeIndex]) {
    tabItems[activeIndex].classList.add('active');
  }

  // 添加点击事件
  tabItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const pages = ['index.html', 'my-projects.html', 'messages.html', 'profile.html'];
      if (index < pages.length) {
        window.location.href = pages[index];
      }
    });
  });
}

// ==================== 返回按钮 ====================
function initBackButton() {
  const backButtons = document.querySelectorAll('[data-action="back"]');
  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.history.back();
    });
  });
}

// ==================== 收藏功能 ====================
function initFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll('.project-card-favorite');

  favoriteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      button.classList.toggle('active');

      if (button.classList.contains('active')) {
        showToast('已收藏');
      } else {
        showToast('已取消收藏');
      }
    });
  });
}

// ==================== 搜索功能 ====================
function initSearchBar() {
  const searchInput = document.querySelector('.search-input');
  const searchClear = document.querySelector('.search-clear');

  if (!searchInput) return;

  // 输入事件
  searchInput.addEventListener('input', debounce((e) => {
    const value = e.target.value.trim();

    if (value) {
      searchClear.style.display = 'block';
    } else {
      searchClear.style.display = 'none';
    }

    // 这里可以添加搜索逻辑
    console.log('搜索:', value);
  }, 300));

  // 清除按钮
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.style.display = 'none';
      searchInput.focus();
    });
  }
}

// ==================== 模拟数据 ====================
const mockProjects = [
  {
    id: 1,
    title: '电商小程序开发项目',
    description: '需要开发一个完整的电商小程序，包含商品展示、购物车、订单管理等功能。项目周期2个月，预算充足。',
    tags: ['小程序开发', 'UI设计', '前端开发'],
    budget: '¥15,000 - ¥25,000',
    duration: '2个月',
    team: {
      total: 5,
      filled: 2,
      members: [
        { name: '张三', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang' },
        { name: '李四', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Li' }
      ]
    },
    status: 'recruiting',
    publishTime: '2026-01-27T10:00:00',
    isFavorite: false
  },
  {
    id: 2,
    title: '企业官网设计与开发',
    description: '为一家科技公司设计并开发企业官网，需要现代化的设计风格，响应式布局，SEO优化。',
    tags: ['网页设计', 'React', 'SEO优化'],
    budget: '¥10,000 - ¥18,000',
    duration: '1.5个月',
    team: {
      total: 4,
      filled: 3,
      members: [
        { name: '王五', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wang' },
        { name: '赵六', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao' },
        { name: '孙七', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sun' }
      ]
    },
    status: 'recruiting',
    publishTime: '2026-01-26T15:30:00',
    isFavorite: false
  },
  {
    id: 3,
    title: 'AI智能客服系统',
    description: '开发一个基于AI的智能客服系统，支持多轮对话、知识库管理、数据分析等功能。',
    tags: ['AI开发', 'Python', '后端开发'],
    budget: '¥30,000 - ¥50,000',
    duration: '3个月',
    team: {
      total: 6,
      filled: 1,
      members: [
        { name: '周八', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhou' }
      ]
    },
    status: 'recruiting',
    publishTime: '2026-01-25T09:00:00',
    isFavorite: true
  },
  {
    id: 4,
    title: '移动App UI/UX设计',
    description: '为一款健康管理App设计完整的UI/UX，包括用户研究、原型设计、视觉设计等。',
    tags: ['UI设计', 'UX设计', 'Figma'],
    budget: '¥8,000 - ¥12,000',
    duration: '1个月',
    team: {
      total: 3,
      filled: 2,
      members: [
        { name: '吴九', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wu' },
        { name: '郑十', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zheng' }
      ]
    },
    status: 'recruiting',
    publishTime: '2026-01-24T14:20:00',
    isFavorite: false
  },
  {
    id: 5,
    title: '短视频营销推广',
    description: '为品牌策划并执行短视频营销方案，包括脚本创作、视频拍摄、后期制作、平台运营。',
    tags: ['视频制作', '内容运营', '营销策划'],
    budget: '¥12,000 - ¥20,000',
    duration: '2个月',
    team: {
      total: 4,
      filled: 1,
      members: [
        { name: '钱十一', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Qian' }
      ]
    },
    status: 'recruiting',
    publishTime: '2026-01-23T11:45:00',
    isFavorite: false
  }
];

// 获取项目列表
function getProjects() {
  return mockProjects;
}

// 根据ID获取项目
function getProjectById(id) {
  return mockProjects.find(p => p.id === parseInt(id));
}

// ==================== SVG图标 ====================
const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',

  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',

  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',

  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',

  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>',

  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>',

  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',

  heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',

  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',

  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',

  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',

  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',

  dollar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',

  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',

  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',

  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',

  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
};

// 获取SVG图标
function getIcon(name) {
  return icons[name] || '';
}

// ==================== 页面初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
  // 初始化Tab导航
  initTabBar();

  // 初始化返回按钮
  initBackButton();

  // 初始化收藏按钮
  initFavoriteButtons();

  // 初始化搜索框
  initSearchBar();

  console.log('拼好班 App 已加载');
});
