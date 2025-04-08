# Modern React Dashboard

一个现代化的React仪表盘应用，提供数据可视化、数据产品展示和数据解决方案展示功能。

## 技术栈

- **前端框架**: React 17
- **UI组件**: Material-UI v5
- **样式解决方案**: Tailwind CSS
- **状态管理**: Redux Toolkit
- **构建工具**: Vite
- **HTTP客户端**: Axios

## 系统要求

- Node.js 14.16.0
- npm 6.x 或更高版本

## 快速开始

1. 克隆项目
```bash
git clone <repository-url>
cd modern-react-dashboard
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

应用将在 http://localhost:3000 启动

## 项目结构

```
modern-react-dashboard/
├── public/              # 静态资源
├── src/
│   ├── components/     # 可复用组件
│   │   ├── Dashboard.js
│   │   ├── HeroSection.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   └── PlatformCard.js
│   ├── pages/          # 页面组件
│   │   ├── Home.js
│   │   ├── Data.js
│   │   ├── DataProducts.js
│   │   └── DataSolutions.js
│   ├── redux/          # Redux状态管理
│   │   ├── slices/
│   │   │   └── authSlice.js
│   │   └── store.js
│   ├── services/       # API服务
│   │   └── api.js
│   ├── theme.js        # Material-UI主题配置
│   ├── App.js          # 应用根组件
│   └── main.jsx        # 应用入口
├── .gitignore
├── package.json
├── vite.config.js      # Vite配置
└── tailwind.config.js  # Tailwind配置
```

## 功能特性

### 首页
- 英雄区域展示
- 平台功能卡片
- 搜索功能

### 数据页面
- 数据集统计概览
- 数据类别展示
- 地理覆盖范围

### 数据产品
- 市场智能仪表盘
- 经济预测工具
- 风险分析套件
- 投资分析平台

### 数据解决方案
- 企业数据仓库
- 实时分析平台
- 数据湖解决方案

## 开发指南

### 添加新页面
1. 在 `src/pages` 目录下创建新的页面组件
2. 在 `App.js` 中添加路由配置

### 样式开发
- 使用Tailwind CSS类进行样式设计
- 在需要自定义样式时使用Material-UI的`sx`属性

### 状态管理
- 全局状态使用Redux管理
- 组件内部状态使用React Hooks

## 部署

构建生产版本：
```bash
npm run build
```

构建完成后，`dist`目录中包含可部署的静态文件。

## 贡献

欢迎提交Issue和Pull Request！

## 许可

MIT License
