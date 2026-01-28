// 首页脚本
// 负责首页的项目列表渲染和交互

// 渲染项目卡片
function renderProjectCard(project) {
  const statusText = {
    'recruiting': '招募中',
    'in_progress': '进行中',
    'completed': '已完成'
  };

  const statusClass = {
    'recruiting': 'tag-warning',
    'in_progress': 'tag-primary',
    'completed': 'tag-success'
  };

  // 生成团队成员头像
  let teamAvatarsHTML = '';
  project.team.members.forEach(member => {
    teamAvatarsHTML += `
      <div class="avatar avatar-sm">
        <img src="${member.avatar}" alt="${member.name}">
      </div>
    `;
  });

  // 添加空缺位置
  const vacancies = project.team.total - project.team.filled;
  if (vacancies > 0) {
    teamAvatarsHTML += `<div class="avatar-placeholder">+</div>`;
  }

  const teamText = `已招${project.team.filled}/${project.team.total}人`;

  // 生成技能标签
  let tagsHTML = '';
  project.tags.forEach(tag => {
    tagsHTML += `<span class="tag">${tag}</span>`;
  });

  // 收藏图标
  const favoriteIcon = project.isFavorite
    ? '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';

  const favoriteClass = project.isFavorite ? 'active' : '';

  return `
    <div class="project-card" onclick="goToProjectDetail(${project.id})">
      <div class="project-card-header">
        <h3 class="project-card-title">${project.title}</h3>
        <div class="project-card-favorite ${favoriteClass}" onclick="event.stopPropagation(); toggleFavorite(${project.id})">
          ${favoriteIcon}
        </div>
      </div>

      <p class="project-card-desc">${project.description}</p>

      <div class="project-card-tags">
        ${tagsHTML}
      </div>

      <div class="project-card-team">
        <div class="avatar-group">
          ${teamAvatarsHTML}
        </div>
        <span class="avatar-group-text">${teamText}</span>
      </div>

      <div class="project-card-meta">
        <div class="project-card-meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <span>${project.budget}</span>
        </div>
        <div class="project-card-meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>${project.duration}</span>
        </div>
        <div class="project-card-meta-item">
          <span>${formatTime(project.publishTime)}</span>
        </div>
      </div>
    </div>
  `;
}

// 渲染项目列表
function renderProjectList() {
  const projectList = document.getElementById('projectList');
  const projects = getProjects();

  if (projects.length === 0) {
    projectList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h3 class="empty-title">暂无项目</h3>
        <p class="empty-desc">当前没有推荐的项目，请稍后再试</p>
      </div>
    `;
    return;
  }

  let html = '';
  projects.forEach(project => {
    html += renderProjectCard(project);
  });

  projectList.innerHTML = html;
}

// 跳转到项目详情
function goToProjectDetail(projectId) {
  window.location.href = `project-detail.html?id=${projectId}`;
}

// 切换收藏状态
function toggleFavorite(projectId) {
  const projects = getProjects();
  const project = projects.find(p => p.id === projectId);

  if (project) {
    project.isFavorite = !project.isFavorite;

    // 重新渲染列表
    renderProjectList();

    // 显示提示
    if (project.isFavorite) {
      showToast('已收藏');
    } else {
      showToast('已取消收藏');
    }
  }
}

// 筛选按钮点击
function initFilterButton() {
  const filterBtn = document.querySelector('.filter-btn');

  if (filterBtn) {
    filterBtn.addEventListener('click', () => {
      showToast('筛选功能开发中');
    });
  }
}

// 下拉刷新
function initPullToRefresh() {
  const phoneContent = document.querySelector('.phone-content');
  let startY = 0;
  let isPulling = false;

  phoneContent.addEventListener('touchstart', (e) => {
    if (phoneContent.scrollTop === 0) {
      startY = e.touches[0].pageY;
      isPulling = true;
    }
  });

  phoneContent.addEventListener('touchmove', (e) => {
    if (!isPulling) return;

    const currentY = e.touches[0].pageY;
    const distance = currentY - startY;

    if (distance > 80) {
      // 触发刷新
      isPulling = false;
      refreshProjects();
    }
  });

  phoneContent.addEventListener('touchend', () => {
    isPulling = false;
  });
}

// 刷新项目列表
function refreshProjects() {
  showLoading();

  // 模拟网络请求
  setTimeout(() => {
    renderProjectList();
    hideLoading();
    showToast('刷新成功');
  }, 1000);
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
  // 渲染项目列表
  renderProjectList();

  // 初始化筛选按钮
  initFilterButton();

  // 初始化下拉刷新
  initPullToRefresh();

  console.log('首页已加载');
});
