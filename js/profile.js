// 个人主页脚本

// 初始化菜单点击事件
function initMenuItems() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const menuTitle = item.querySelector('.menu-title').textContent;
      showToast(`${menuTitle}功能开发中`);
    });
  });
}

// 退出登录
function initLogoutButton() {
  const logoutBtn = document.getElementById('logoutBtn');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // 显示确认对话框
      if (confirm('确定要退出登录吗？')) {
        showLoading();

        // 模拟退出登录
        setTimeout(() => {
          hideLoading();
          showToast('已退出登录');

          // 这里可以跳转到登录页
          // window.location.href = 'login.html';
        }, 1000);
      }
    });
  }
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
  // 初始化菜单项
  initMenuItems();

  // 初始化退出登录按钮
  initLogoutButton();

  console.log('个人主页已加载');
});
