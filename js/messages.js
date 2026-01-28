// 消息中心页面脚本

// 初始化分类Tab
function initMessageTabs() {
  const tabs = document.querySelectorAll('.message-tab');
  const messageItems = document.querySelectorAll('.message-item');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // 移除所有active状态
      tabs.forEach(t => t.classList.remove('active'));
      // 添加当前active状态
      tab.classList.add('active');

      // 筛选消息
      filterMessages(index);
    });
  });
}

// 筛选消息
function filterMessages(tabIndex) {
  const messageItems = document.querySelectorAll('.message-item');

  messageItems.forEach(item => {
    const isSystemMessage = item.querySelector('.message-avatar .avatar svg') !== null;

    if (tabIndex === 0) {
      // 全部
      item.style.display = 'flex';
    } else if (tabIndex === 1) {
      // 系统通知
      item.style.display = isSystemMessage ? 'flex' : 'none';
    } else if (tabIndex === 2) {
      // 团队消息
      item.style.display = !isSystemMessage ? 'flex' : 'none';
    }
  });
}

// 消息点击事件
function initMessageClick() {
  const messageItems = document.querySelectorAll('.message-item');

  messageItems.forEach(item => {
    item.addEventListener('click', () => {
      // 标记为已读
      item.classList.remove('unread');

      // 更新Tab徽章数量
      updateBadgeCount();

      // 这里可以跳转到消息详情页
      showToast('查看消息详情');
    });
  });
}

// 更新徽章数量
function updateBadgeCount() {
  const unreadCount = document.querySelectorAll('.message-item.unread').length;
  const badge = document.querySelector('.tab-bar .tab-badge');

  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
  // 初始化分类Tab
  initMessageTabs();

  // 初始化消息点击
  initMessageClick();

  // 更新徽章数量
  updateBadgeCount();

  console.log('消息中心页已加载');
});
