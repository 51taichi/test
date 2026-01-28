# 拼好班 - 灵活用工平台 Web原型

## 项目简介

拼好班是一个创新型灵活用工平台，通过"拼团"模式连接自由职业者与项目团队。本项目是基于产品需求文档（PRD）和设计规范（DESIGN_SPEC）开发的高保真Web原型，完美还原iOS设计风格。

### 核心特点

- ✅ **高保真还原**：严格遵循设计规范，完美还原iOS界面风格
- 📱 **iPhone 16 Pro Max Mockup**：真实的手机框架，包含动态岛
- 🎨 **专业设计系统**：完整的色彩系统、字体规范、组件库
- 🚀 **纯前端实现**：HTML5 + CSS3 + 原生JavaScript，无需后端
- 💡 **交互完整**：包含所有核心交互功能和动画效果
- 📦 **开箱即用**：直接在浏览器中打开即可使用

## 技术栈

- **HTML5**：语义化标签，结构清晰
- **CSS3**：CSS变量、Flexbox、Grid布局、动画
- **JavaScript**：原生ES6+，无框架依赖
- **设计系统**：基于iOS Human Interface Guidelines

## 项目结构

```
拼好班/
├── index.html                 # 首页（项目推荐流）
├── project-detail.html        # 项目详情页
├── my-projects.html           # 我的项目页
├── profile.html               # 个人主页
├── messages.html              # 消息中心
├── publish-project.html       # 发布项目页（待完善）
├── team-management.html       # 团队管理页（待完善）
├── css/
│   ├── common.css            # 公共样式（CSS变量、重置、布局）
│   ├── components.css        # 组件库样式
│   ├── index.css             # 首页样式
│   ├── project-detail.css    # 项目详情页样式
│   ├── messages.css          # 消息中心样式
│   └── profile.css           # 个人主页样式
├── js/
│   ├── common.js             # 公共脚本（工具函数、模拟数据）
│   ├── index.js              # 首页脚本
│   ├── project-detail.js     # 项目详情页脚本
│   ├── messages.js           # 消息中心脚本
│   └── profile.js            # 个人主页脚本
├── PRD.md                     # 产品需求文档
├── DESIGN_SPEC.md             # 设计规范文档
└── README.md                  # 项目说明文档（本文件）
```

## 快速开始

### 方法1：直接打开（推荐）

1. 下载或克隆本项目
2. 使用浏览器打开 `index.html` 文件
3. 开始体验拼好班原型

### 方法2：本地服务器

```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx http-server -p 8000

# 然后在浏览器访问
http://localhost:8000
```

### 推荐浏览器

- Chrome 90+
- Safari 14+
- Edge 90+
- Firefox 88+

## 页面功能说明

### ✅ 已完成页面（全部4个核心页面）

#### 1. 首页（index.html）
**功能**：
- 项目推荐流展示
- 搜索框（支持实时搜索）
- 筛选按钮
- 项目卡片列表
- 收藏功能
- 下拉刷新
- 底部Tab导航
- 浮动发布按钮

**交互**：
- 点击项目卡片 → 跳转到项目详情
- 点击收藏图标 → 切换收藏状态
- 点击筛选按钮 → 显示筛选面板（开发中提示）
- 下拉页面 → 刷新项目列表
- 点击浮动按钮 → 跳转到发布项目页

#### 2. 项目详情页（project-detail.html）
**功能**：
- 完整的项目信息展示
- 项目描述、技能要求
- 团队配置（已加入成员 + 空缺职位）
- 项目信息（预算、周期、发布时间）
- 项目发起方信息
- 收藏功能
- 申请加入按钮

**交互**：
- 点击返回按钮 → 返回上一页
- 点击收藏按钮 → 切换收藏状态
- 点击申请按钮 → 提交申请（模拟）
- 点击团队成员 → 查看成员主页（待开发）

#### 3. 我的项目页（my-projects.html）
**功能**：
- 项目分类Tab（进行中/已完成/已取消）
- 项目列表展示
- 项目进度条
- 我的角色显示
- 日历视图切换按钮

**交互**：
- 切换分类Tab → 查看不同状态的项目
- 点击项目卡片 → 进入项目详情
- 点击日历按钮 → 切换日历视图（待开发）

#### 4. 消息中心（messages.html）
**功能**：
- 消息分类Tab（全部/系统通知/团队消息）
- 消息列表展示
- 未读消息标记
- 系统通知和团队消息分类
- 消息时间显示
- 未读徽章数量

**交互**：
- 切换分类Tab → 筛选不同类型的消息
- 点击消息 → 标记为已读，显示消息详情
- 自动更新Tab徽章数量

#### 5. 个人主页（profile.html）
**功能**：
- 个人信息展示（头像、昵称、认证状态、信用分）
- 统计数据（参与项目、完成项目、累计收入、平均评分）
- 技能标签展示
- 功能菜单（个人资料、作品集、技能认证、收入统计）
- 设置菜单（设置、帮助与反馈、关于）
- 退出登录按钮

**交互**：
- 点击编辑资料 → 编辑个人信息（开发中提示）
- 点击菜单项 → 进入对应功能页面（开发中提示）
- 点击退出登录 → 确认后退出

### 🚧 待完善页面

以下页面的HTML结构已创建，但功能待完善：

- **发布项目页**（publish-project.html）
- **团队管理页**（team-management.html）

## 设计规范

### 色彩系统

```css
/* 主色调 */
--color-primary: #2563EB;        /* 品牌蓝 */
--color-secondary: #F59E0B;      /* 活力橙 */

/* 功能色彩 */
--color-success: #10B981;        /* 成功绿 */
--color-warning: #F59E0B;        /* 警告黄 */
--color-error: #EF4444;          /* 错误红 */
--color-info: #3B82F6;           /* 信息蓝 */

/* 中性色 */
--color-gray-900: #1F2937;       /* 深灰 */
--color-gray-600: #6B7280;       /* 中灰 */
--color-gray-400: #9CA3AF;       /* 浅灰 */
--color-gray-100: #F3F4F6;       /* 极浅灰 */
```

### 字体规范

- **主字体**：-apple-system, PingFang SC
- **大标题**：45px / Bold
- **标题1**：37px / Bold
- **标题2**：29px / Semibold
- **正文**：23px / Regular
- **脚注**：17px / Regular

### 间距系统

- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 24px
- **2xl**: 32px

### 圆角规范

- **小圆角**: 4px（标签、徽章）
- **中圆角**: 8px（按钮、输入框）
- **大圆角**: 12px（卡片）
- **圆形**: 50%（头像）

## 核心组件

### 按钮组件

```html
<!-- 主要按钮 -->
<button class="btn btn-primary">申请加入</button>

<!-- 次要按钮 -->
<button class="btn btn-secondary">取消</button>

<!-- 文字按钮 -->
<button class="btn btn-text">查看更多</button>

<!-- 禁用按钮 -->
<button class="btn btn-primary btn-disabled" disabled>已禁用</button>
```

### 卡片组件

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">卡片标题</h3>
  </div>
  <div class="card-body">
    <p>卡片内容</p>
  </div>
</div>
```

### 标签组件

```html
<span class="tag">默认标签</span>
<span class="tag tag-primary">主要标签</span>
<span class="tag tag-success">成功标签</span>
<span class="tag tag-warning">警告标签</span>
<span class="tag tag-error">错误标签</span>
```

### 头像组件

```html
<!-- 单个头像 -->
<div class="avatar">
  <img src="avatar.jpg" alt="用户名">
</div>

<!-- 头像组 -->
<div class="avatar-group">
  <div class="avatar avatar-sm">
    <img src="avatar1.jpg" alt="用户1">
  </div>
  <div class="avatar avatar-sm">
    <img src="avatar2.jpg" alt="用户2">
  </div>
  <div class="avatar-placeholder">+</div>
</div>
```

## 模拟数据

项目使用模拟数据进行演示，数据定义在 `js/common.js` 中的 `mockProjects` 数组。

### 数据结构

```javascript
{
  id: 1,
  title: '项目名称',
  description: '项目描述',
  tags: ['技能1', '技能2'],
  budget: '¥15,000 - ¥25,000',
  duration: '2个月',
  team: {
    total: 5,
    filled: 2,
    members: [...]
  },
  status: 'recruiting',
  publishTime: '2026-01-27T10:00:00',
  isFavorite: false
}
```

## 工具函数

### 显示Toast提示

```javascript
showToast('操作成功');
```

### 显示/隐藏加载状态

```javascript
showLoading();
// 执行操作
hideLoading();
```

### 格式化时间

```javascript
formatTime('2026-01-27T10:00:00'); // 返回：1天前
```

### 格式化数字

```javascript
formatNumber(12345); // 返回：12.3k
```

## 浏览器兼容性

- ✅ Chrome 90+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Firefox 88+
- ⚠️ IE 不支持

## 响应式设计

- **桌面端**：显示iPhone 16 Pro Max mockup框架
- **移动端**：自动适配全屏显示，隐藏mockup框架

## 性能优化

- 使用CSS变量减少重复代码
- 图片使用外部CDN（pravatar.cc）
- 懒加载和虚拟滚动（待实现）
- 防抖和节流优化搜索和滚动

## 开发维护指南

### 添加新页面

1. 创建HTML文件（如 `new-page.html`）
2. 创建对应的CSS文件（`css/new-page.css`）
3. 创建对应的JS文件（`js/new-page.js`）
4. 在HTML中引入CSS和JS文件
5. 使用公共组件和样式

### 修改样式

1. 全局样式修改 → `css/common.css`
2. 组件样式修改 → `css/components.css`
3. 页面独有样式 → `css/[page-name].css`

### 添加模拟数据

在 `js/common.js` 中的 `mockProjects` 数组添加数据。

## 已知问题

✅ **已修复**：
1. ~~图片加载问题~~ - 已更换为可靠的DiceBear头像API
2. ~~消息中心和个人主页缺失~~ - 已完成静态实现

⚠️ **待优化**：
1. 部分页面功能待完善（发布项目、团队管理）
2. 暂无后端接口，所有数据为模拟数据
3. 部分交互仅显示提示，未完整实现

## 后续计划

- [ ] 完善所有页面功能
- [ ] 添加更多交互动画
- [ ] 实现深色模式切换
- [ ] 添加骨架屏加载效果
- [ ] 优化移动端体验
- [ ] 接入真实后端API

## 参考文档

- [PRD.md](PRD.md) - 产品需求文档
- [DESIGN_SPEC.md](DESIGN_SPEC.md) - 设计规范文档
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

## 许可证

本项目仅用于演示和学习目的。

## 联系方式

如有问题或建议，请通过以下方式联系：

- 项目地址：本地文件系统
- 文档：查看 PRD.md 和 DESIGN_SPEC.md

---

**拼好班** - 让每个人都能通过"拼工作"实现时间价值最大化和收入增长 🚀
