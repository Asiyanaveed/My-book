import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b79'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'eff'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'c90'),
            routes: [
              {
                path: '/advanced-ai-control/module-5-advanced-ai',
                component: ComponentCreator('/advanced-ai-control/module-5-advanced-ai', 'd41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/appendix/glossary',
                component: ComponentCreator('/appendix/glossary', '589'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/appendix/references',
                component: ComponentCreator('/appendix/references', '68e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/appendix/resources',
                component: ComponentCreator('/appendix/resources', '5cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hardware-basics/module-3-hardware',
                component: ComponentCreator('/hardware-basics/module-3-hardware', '315'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/humanoid-design/module-6-humanoid-design',
                component: ComponentCreator('/humanoid-design/module-6-humanoid-design', '6ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '9fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/intro',
                component: ComponentCreator('/introduction/intro', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ros2-foundations/module-1-ros2',
                component: ComponentCreator('/ros2-foundations/module-1-ros2', '7ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ros2-foundations/ros2-hands-on',
                component: ComponentCreator('/ros2-foundations/ros2-hands-on', '9c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simulation/digital-twins',
                component: ComponentCreator('/simulation/digital-twins', '2e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simulation/gazebo-unity',
                component: ComponentCreator('/simulation/gazebo-unity', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simulation/module-2-simulation',
                component: ComponentCreator('/simulation/module-2-simulation', 'ded'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vla-systems/module-4-vla-foundations',
                component: ComponentCreator('/vla-systems/module-4-vla-foundations', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vla-systems/vla-action',
                component: ComponentCreator('/vla-systems/vla-action', '0c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vla-systems/vla-hands-on-basic',
                component: ComponentCreator('/vla-systems/vla-hands-on-basic', 'd27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vla-systems/vla-language',
                component: ComponentCreator('/vla-systems/vla-language', '7be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vla-systems/vla-vision',
                component: ComponentCreator('/vla-systems/vla-vision', 'ad6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
