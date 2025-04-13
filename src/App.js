import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// 导航配置
const navConfig = {
  // 标签页配置
  tabs: [
    { label: '首页', path: '/', hasMenu: false },
    { label: '数据', path: '/data', hasMenu: true },
    { label: '数据产品', path: '/data-products', hasMenu: true },
    { label: '数据解决方案', path: '/data-solutions', hasMenu: true }
  ],
  // 菜单项配置
  menuItems: {
    '/data': {
      title: '数据产品与服务',
      content: [
        { 
          category: '精选产品',
          items: [
            { label: '云原生数据库 CSS', description: '高性能、高可用、可扩展的云原生数据库', path: '/data/products/css' },
            { label: '智能云数据仓库', description: '高性能、低成本的云数据仓库，简单易用一键部署', path: '/data/products/warehouse' },
            { label: '人工智能平台 PAI', description: '一站式的AI平台，提供全流程AI开发能力', path: '/data/products/pai' }
          ]
        },
        {
          category: '热门产品',
          items: [
            { label: '云原生数据湖', description: '低成本、高性能、开放的云原生数据湖', path: '/data/products/lake' },
            { label: '电子表格服务', description: '在线协作、智能分析、可视化图表', path: '/data/products/sheet' },
            { label: '大数据计算服务 MaxCompute', description: '全托管的大数据计算服务，安全可靠', path: '/data/products/maxcompute' }
          ]
        },
        {
          category: '数据服务',
          items: [
            { label: '数据集成 DataWorks', description: '一站式的数据集成、开发、治理平台', path: '/data/services/dataworks' },
            { label: '云数据库 RDS', description: 'MySQL、PostgreSQL、SQL Server、MariaDB等多种数据库', path: '/data/services/rds' },
            { label: '数据服务 Serverless 服务 ACK Serverless', description: '全托管的Kubernetes服务，无需管理节点，按需付费', path: '/data/services/serverless' }
          ]
        }
      ]
    },
    '/data-products': {
      title: '数据产品分类',
      content: [
        { 
          category: '人工智能产品',
          items: [
            { label: '人工智能平台 PAI', description: '一站式的AI平台，提供全流程AI开发能力', path: '/data-products/ai/pai' },
            { label: '大数据平台', description: '高性能、低成本的大数据处理平台', path: '/data-products/big-data' },
            { label: '数据治理平台', description: '全方位的数据治理能力，保障数据安全', path: '/data-products/governance' }
          ]
        },
        {
          category: '数据产品',
          items: [
            { label: '云原生数据库 CSS', description: '高性能、高可用、可扩展的云原生数据库', path: '/data-products/css' },
            { label: '云数据库 RDS', description: 'MySQL、PostgreSQL、SQL Server、MariaDB等多种数据库', path: '/data-products/rds' },
            { label: '云原生数据湖', description: '低成本、高性能、开放的云原生数据湖', path: '/data-products/lake' }
          ]
        }
      ]
    },
    '/data-solutions': {
      title: '解决方案分类',
      content: [
        { 
          category: '行业解决方案',
          items: [
            { label: '金融行业解决方案', description: '为银行、保险、证券等金融机构提供全面的数据解决方案', path: '/data-solutions/industry/finance' },
            { label: '制造行业解决方案', description: '助力制造企业数字化转型，提升生产效率', path: '/data-solutions/industry/manufacturing' },
            { label: '零售行业解决方案', description: '帮助零售企业实现精准营销、库存优化', path: '/data-solutions/industry/retail' }
          ]
        },
        {
          category: '场景解决方案',
          items: [
            { label: '数据湖解决方案', description: '构建企业级数据湖，统一管理结构化和非结构化数据', path: '/data-solutions/scenario/data-lake' },
            { label: '实时数据分析方案', description: '毫秒级数据分析，快速响应业务需求', path: '/data-solutions/scenario/real-time' },
            { label: '数据仓库现代化方案', description: '传统数据仓库向云原生数据仓库迁移的解决方案', path: '/data-solutions/scenario/warehouse' }
          ]
        },
        {
          category: '定制化解决方案',
          items: [
            { label: '企业级数据中台解决方案', description: '构建企业级数据中台，实现数据资产化', path: '/data-solutions/custom/data-middle' },
            { label: 'DataWorks 数据开发平台定制', description: '根据企业需求定制DataWorks数据开发平台', path: '/data-solutions/custom/dataworks' }
          ]
        }
      ]
    }
  },
  // 左侧分类列表
  categoriesMap: {
    '/data': ['精选产品', '热门产品', '数据服务'],
    '/data-products': ['数据库产品', '数据仓库产品', '人工智能产品'],
    '/data-solutions': ['行业解决方案', '场景解决方案', '定制化解决方案']
  },
  // 菜单延迟关闭时间
  menuDelay: 150,
  // 无效路径重定向
  redirectPath: '/'
};

// 简单页面组件
const HomePage = () => <div className="container mx-auto p-4 mt-4"><h1 className="text-2xl font-bold">首页</h1></div>;
const DataPage = () => <div className="container mx-auto p-4 mt-4"><h1 className="text-2xl font-bold">数据页面</h1></div>;
const DataProductsPage = () => <div className="container mx-auto p-4 mt-4"><h1 className="text-2xl font-bold">数据产品页面</h1></div>;
const DataSolutionsPage = () => <div className="container mx-auto p-4 mt-4"><h1 className="text-2xl font-bold">数据解决方案页面</h1></div>;
const NotFoundPage = () => <div className="container mx-auto p-4 mt-4"><h1 className="text-2xl font-bold">页面不存在</h1></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar {...navConfig} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/data-products" element={<DataProductsPage />} />
          <Route path="/data-solutions" element={<DataSolutionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
