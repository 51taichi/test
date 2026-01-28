// 项目详情页脚本

// 获取URL参数
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// 渲染项目详情
function renderProjectDetail() {
  const projectId = getQueryParam('id');
  const project = getProjectById(projectId);

  if (!project) {
    document.getElementById('projectDetail').innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h3 class="empty-title">项目不存在</h3>
        <p class="empty-desc">该项目可能已被删除或不存在</p>
        <button class="btn btn-primary" onclick="window.history.back()">返回</button>
      </div>
    `;
    return;
  }

  // 更新收藏按钮状态
  updateFavoriteButton(project.isFavorite);

  // 生成技能标签
  let tagsHTML = '';
  project.tags.forEach(tag => {
    tagsHTML += `<span class="tag">${tag}</span>`;
  });

  // 生成团队成员
  let teamHTML = '';
  project.team.members.forEach(member => {
    teamHTML += `
      <div class="team-member-card">
        <div class="avatar">
          <img src="${member.avatar}" alt="${member.name}">
        </div>
        <div class="team-member-info">
          <div class="team-member-name">${member.name}</div>
          <div class="team-member-role">团队成员</div>
        </div>
        <div class="publisher-action">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>
      </div>
    `;
  });

  // 生成空缺职位
  const vacancies = project.team.total - project.team.filled;
  for (let i = 0; i < vacancies; i++) {
    teamHTML += `
      <div class="team-vacancy-card">
        <div class="vacancy-icon">+</div>
        <div class="vacancy-info">
          <div class="vacancy-role">招募中</div>
          <div class="vacancy-status">等待合适的人才加入</div>
        </div>
      </div>
    `;
  }

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

  const html = `
    <h1 class="detail-title">${project.title}</h1>

    <div class="detail-status">
      <span class="tag ${statusClass[project.status]}">${statusText[project.status]}</span>
      <span class="text-footnote">${formatTime(project.publishTime)}</span>
    </div>

    <div class="detail-section">
      <h2 class="detail-section-title">项目描述</h2>
      <p class="detail-section-content">${project.description}</p>
    </div>

    <div class="detail-section">
      <h2 class="detail-section-title">技能要求</h2>
      <div class="detail-tags">
        ${tagsHTML}
      </div>
    </div>

    <div class="detail-section">
      <h2 class="detail-section-title">团队配置 (${project.team.filled}/${project.team.total})</h2>
      <div class="team-grid">
        ${teamHTML}
      </div>
    </div>

    <div class="detail-section">
      <h2 class="detail-section-title">项目信息</h2>
      <div class="info-list">
        <div class="info-item">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div class="info-content">
            <div class="info-label">预算范围</div>
            <div class="info-value">${project.budget}</div>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div class="info-content">
            <div class="info-label">项目周期</div>
            <div class="info-value">${project.duration}</div>
          </div>
        </div>

        <div class="info-item">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div class="info-content">
            <div class="info-label">发布时间</div>
            <div class="info-value">${new Date(project.publishTime).toLocaleDateString('zh-CN')}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2 class="detail-section-title">项目发起方</h2>
      <div class="publisher-card">
        <div class="avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Company" alt="项目方">
        </div>
        <div class="publisher-info">
          <div class="publisher-name">创新科技公司</div>
          <div class="publisher-meta">信用分：98 · 已发布12个项目</div>
        </div>
        <div class="publisher-action">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>
      </div>
    </div>
  `;

  document.getElementById('projectDetail').innerHTML = html;

  // 更新申请按钮状态
  updateApplyButton(project);
}

// 更新收藏按钮
function updateFavoriteButton(isFavorite) {
  const favoriteBtn = document.getElementById('favoriteBtn');
  if (!favoriteBtn) return;

  if (isFavorite) {
    favoriteBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    `;
    favoriteBtn.style.color = 'var(--color-error)';
  } else {
    favoriteBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    `;
    favoriteBtn.style.color = '';
  }
}

// 更新申请按钮
function updateApplyButton(project) {
  const applyBtn = document.getElementById('applyBtn');
  if (!applyBtn) return;

  if (project.team.filled >= project.team.total) {
    applyBtn.textContent = '招募已满';
    applyBtn.classList.add('btn-disabled');
    applyBtn.disabled = true;
  } else if (project.status === 'completed') {
    applyBtn.textContent = '项目已完成';
    applyBtn.classList.add('btn-disabled');
    applyBtn.disabled = true;
  } else {
    applyBtn.textContent = '申请加入';
    applyBtn.classList.remove('btn-disabled');
    applyBtn.disabled = false;
  }
}

// 收藏按钮点击
function initFavoriteButton() {
  const favoriteBtn = document.getElementById('favoriteBtn');
  if (!favoriteBtn) return;

  favoriteBtn.addEventListener('click', () => {
    const projectId = getQueryParam('id');
    const projects = getProjects();
    const project = projects.find(p => p.id === parseInt(projectId));

    if (project) {
      project.isFavorite = !project.isFavorite;
      updateFavoriteButton(project.isFavorite);

      if (project.isFavorite) {
        showToast('已收藏');
      } else {
        showToast('已取消收藏');
      }
    }
  });
}

// 申请按钮点击
function initApplyButton() {
  const applyBtn = document.getElementById('applyBtn');
  if (!applyBtn) return;

  applyBtn.addEventListener('click', () => {
    if (applyBtn.disabled) return;

    showToast('申请已提交，等待审核');

    // 模拟申请成功后的状态变化
    setTimeout(() => {
      applyBtn.textContent = '等待审核';
      applyBtn.classList.add('btn-disabled');
      applyBtn.disabled = true;
    }, 500);
  });
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
  // 渲染项目详情
  renderProjectDetail();

  // 初始化收藏按钮
  initFavoriteButton();

  // 初始化申请按钮
  initApplyButton();

  console.log('项目详情页已加载');
});
