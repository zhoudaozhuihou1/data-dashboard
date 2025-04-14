import React, { useState, useEffect, useRef } from 'react';
import { Tabs, Tab, AppBar, Box, Paper, Grid, Typography, Divider, Fade, Popper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// 自定义样式 - 参考阿里云风格
const tabStyle = {
  fontWeight: 500,
  fontSize: '14px',
  minHeight: '64px',
  opacity: 1,
  textTransform: 'none',
  transition: 'color 0.2s',
  position: 'relative',
  '&:hover': {
    color: '#1890ff', // 阿里云的蓝色调
    '&::after': {
      transform: 'scaleX(1)',
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#1890ff', // 阿里云的蓝色调
    transform: 'scaleX(0)',
    transformOrigin: 'center',
    transition: 'transform 0.2s ease'
  },
  '&.Mui-selected': {
    color: '#1890ff',
    '&::after': {
      transform: 'scaleX(1)',
    }
  }
};

// 菜单内容组件，用于优化渲染 - 参考阿里云的内容过渡效果
const MenuContent = React.memo(({ activeTab, menuItems, handleMenuItemClick, categoriesMap }) => {
  // 添加平滑过渡效果 - 阿里云菜单的过渡非常快速且自然
  const [fadeIn, setFadeIn] = useState(true);
  
  // 当activeTab变化时，触发更快的淡入淡出效果
  useEffect(() => {
    setFadeIn(false); // 先淡出
    const timer = setTimeout(() => {
      setFadeIn(true); // 再淡入
    }, 30); // 阿里云的过渡更快
    return () => clearTimeout(timer);
  }, [activeTab]);

  // 获取当前标签页对应的分类列表
  const categories = categoriesMap[activeTab] || [];

  return (
    <Box 
      className="container mx-auto px-4 menu-content" 
      sx={{ 
        opacity: fadeIn ? 1 : 0.9, // 不透明度变化更微妙
        transform: `translateY(${fadeIn ? '0' : '-5px'})`, // 添加轻微的上移效果
        transition: 'all 0.15s ease-out', // 更快的过渡
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <Grid container spacing={2}>
        {/* 左侧分类导航 */}
        <Grid item xs={3}>
          <Typography variant="subtitle1" className="font-bold mb-3 text-gray-700" sx={{ fontSize: '16px' }}>
            {activeTab && menuItems[activeTab]?.title}
          </Typography>
          <Box className="flex flex-col">
            {categories.map((category, index) => (
              <Typography 
                key={index}
                className="text-sm py-2 hover:bg-gray-100 cursor-pointer rounded" 
                sx={{ color: '#555' }}
              >
                {category}
              </Typography>
            ))}
          </Box>
        </Grid>
        
        {/* 右侧产品卡片区域 */}
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {menuItems[activeTab]?.content && menuItems[activeTab].content.map((category, catIndex) => (
              <Grid item xs={4} key={catIndex}>
                <Box sx={{ backgroundColor: '#fff', height: '100%' }}>
                  <Typography variant="subtitle2" className="font-medium mb-2" sx={{ color: '#1890ff', fontSize: '14px' }}>
                    {category.category}
                  </Typography>
                  <Divider className="mb-3" sx={{ backgroundColor: '#f0f0f0' }} />
                  {category.items.map((item, itemIndex) => (
                    <Box 
                      key={itemIndex} 
                      className="mb-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      onClick={() => handleMenuItemClick(item.path)}
                      sx={{ transition: 'all 0.2s ease' }}
                    >
                      <Typography className="text-sm font-medium" sx={{ color: '#333' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#999', display: 'block', fontSize: '12px', lineHeight: 1.5 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
});

// 默认配置
const defaultConfig = {
  menuDelay: 150, // 菜单延迟关闭时间
  tabs: [], // 标签页配置
  menuItems: {}, // 菜单项配置
  categoriesMap: {}, // 左侧分类列表
  redirectPath: '/' // 无效路径重定向
};

/**
 * 通用导航栏组件
 * @param {Object} props 组件属性
 * @param {Array} props.tabs 标签页配置 [{label: '标签名', path: '路径', hasMenu: 是否有下拉菜单}]
 * @param {Object} props.menuItems 菜单项配置 {'/path': {title: '标题', content: [{category: '分类名', items: [{label: '名称', description: '描述', path: '路径'}]}]}}
 * @param {Object} props.categoriesMap 左侧分类列表 {'/path': ['分类1', '分类2']}
 * @param {number} props.menuDelay 菜单延迟关闭时间（毫秒）
 * @param {string} props.redirectPath 无效路径重定向路径
 * @returns {JSX.Element} 导航栏组件
 */
const Navbar = (props) => {
  // 合并配置
  const config = { ...defaultConfig, ...props };
  const { tabs, menuItems, categoriesMap, menuDelay, redirectPath } = config;

  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const lastTabRef = useRef(null); // 用于记录上一次悬停的tab
  const timeoutRef = useRef(null); // 用于存储timeout ID的ref
  const tabsRef = useRef(null); // 创建对tab区域的引用
  
  // 检查组件挂载和当前路由
  useEffect(() => {
    console.log('Current path from location:', location.pathname);
    // 确保选中值与当前路由匹配
    setValue(location.pathname);
    
    // 处理重定向或直接访问的情况
    const validPaths = tabs.map(tab => tab.path);
    if (!validPaths.includes(location.pathname)) {
      console.log('Invalid path, redirecting to home');
      navigate(redirectPath);
      setValue(redirectPath);
    }
  }, [location.pathname, navigate, tabs, redirectPath]);
  
  // 处理Tab点击 - 仅处理页面导航，不影响菜单显示
  const handleTabClick = (event, path) => {
    console.log('Tab clicked, navigating to:', path);
    // 阻止事件冒泡，防止与Tabs的onChange冲突
    event.stopPropagation();
    // 更新选中的tab值
    setValue(path);
    // 导航到新路径
    navigate(path);
    // 注意：点击时不关闭菜单，这样用户可以继续查看内容
    // 只有在点击菜单项或离开导航区域时才关闭菜单
  };
  
  // 处理鼠标进入Tab - 这是切换菜单内容的主要方式
  const handleTabHover = (event, tabPath) => {
    console.log('Tab hover:', tabPath);
    
    // 记录从一个tab到另一个tab的直接过渡
    if (activeTab !== tabPath && activeTab !== null) {
      console.log('Direct tab-to-tab transition detected from', activeTab, 'to', tabPath);
    }
    
    // 设置当前激活的tab
    setActiveTab(tabPath);
    lastTabRef.current = tabPath;
    
    // 如果菜单未打开，则打开菜单
    if (!menuAnchor) {
      setMenuAnchor(event.currentTarget);
    }
  };
  
  // 处理导航区域鼠标离开
  const handleNavAreaLeave = (event) => {
    console.log('Nav area mouse leave');
    // 防止在Tab和Menu之间移动时关闭菜单
    // 使用定时器延迟关闭，允许用户在离开导航区域后有短暂时间再次进入
    if (menuAnchor) {
      // 使用setTimeout延迟关闭菜单
      const timeout = setTimeout(() => {
        setMenuAnchor(null);
        setActiveTab(null);
      }, menuDelay); // 可配置的延迟时间
      
      // 将timeout ID保存到ref中，以便在需要时清除
      timeoutRef.current = timeout;
    }
  };
  
  // 处理鼠标重新进入导航区域
  const handleNavAreaEnter = () => {
    // 如果有未执行的关闭菜单的timeout，则取消它
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  
  // 处理菜单项点击
  const handleMenuItemClick = (path) => {
    console.log('Menu item clicked, navigating to:', path);
    // 导航到菜单项的路径
    navigate(path);
    
    // 更新选中的tab值到最近的父级路径
    // 动态匹配父路径
    const parentTab = tabs.find(tab => path.startsWith(tab.path) && tab.path !== '/');
    if (parentTab) {
      setValue(parentTab.path);
    } else {
      setValue(path);
    }
    
    // 点击菜单项时关闭菜单
    setMenuAnchor(null);
    setActiveTab(null);
  };
  
  return (
    <AppBar position="static" color="default" className="bg-white shadow-md w-full">
      <Box 
        className="w-full nav-area" 
        onMouseLeave={handleNavAreaLeave}
        onMouseEnter={handleNavAreaEnter}
      >
        <Tabs
          ref={tabsRef}
          value={value}
          onChange={(event, newValue) => {
            console.log('Tab onChange event, value:', newValue);
            setValue(newValue);
            navigate(newValue);
          }}
          indicatorColor="primary"
          textColor="primary"
          className="min-h-[64px] px-4"
          TabIndicatorProps={{ style: { display: 'none' } }}
          onMouseMove={(e) => {
            const tabsElement = tabsRef.current;
            if (tabsElement && menuAnchor) {
              console.log('Mouse moving in tabs area');
            }
          }}
        >
          {tabs.map((tab, index) => (
            <Tab 
              key={index}
              label={
                tab.hasMenu ? (
                  <div className="flex items-center">
                    {tab.label} <KeyboardArrowDownIcon style={{ fontSize: 16, marginLeft: 2 }} />
                  </div>
                ) : tab.label
              }
              value={tab.path}
              className={`font-medium ${tab.hasMenu ? 'tab-with-menu' : ''}`}
              sx={tabStyle}
              onMouseEnter={tab.hasMenu ? (e) => handleTabHover(e, tab.path) : undefined}
              onMouseOver={tab.hasMenu ? (e) => handleTabHover(e, tab.path) : undefined}
              onClick={(e) => {
                e.stopPropagation();
                handleTabClick(e, tab.path);
              }}
            />
          ))}
        </Tabs>

        <Popper
          open={Boolean(menuAnchor)}
          anchorEl={menuAnchor}
          placement="bottom-start"
          transition
          style={{ zIndex: 1300 }}
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 0], // 调整Popper的位置，确保不遮挡tab
              },
            },
            {
              name: 'preventOverflow',
              options: {
                boundary: 'viewport',
                padding: 8,
              },
            },
          ]}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={150}>
              <Paper
                elevation={2}
                sx={{
                  width: '100vw',
                  maxWidth: '100%',
                  borderRadius: 0,
                  padding: '20px 0',
                  boxShadow: '0 6px 16px -8px rgba(0,0,0,0.08), 0 9px 28px 0 rgba(0,0,0,0.05)',
                  borderTop: '1px solid #f0f0f0',
                  transition: 'box-shadow 0.2s ease-in-out, transform 0.15s ease-out',
                  overflow: 'hidden',
                  mt: 0,
                }}
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                  }
                }}
                onMouseLeave={(event) => {
                  const timeout = setTimeout(() => {
                    setMenuAnchor(null);
                    setActiveTab(null);
                  }, menuDelay);
                  timeoutRef.current = timeout;
                }}
              >
                {activeTab && (
                  <MenuContent 
                    activeTab={activeTab} 
                    menuItems={menuItems} 
                    categoriesMap={categoriesMap}
                    handleMenuItemClick={handleMenuItemClick} 
                  />
                )}
              </Paper>
            </Fade>
          )}
        </Popper>
      </Box>
    </AppBar>
  );
};

export default Navbar;
