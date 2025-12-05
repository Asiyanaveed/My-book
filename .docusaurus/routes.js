import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ur/',
    component: ComponentCreator('/ur/', '3b1'),
    exact: true
  },
  {
    path: '/ur/',
    component: ComponentCreator('/ur/', '357'),
    routes: [
      {
        path: '/ur/',
        component: ComponentCreator('/ur/', '76e'),
        routes: [
          {
            path: '/ur/',
            component: ComponentCreator('/ur/', 'c55'),
            routes: [
              {
                path: '/ur/advanced-ai-control/module-5-advanced-ai',
                component: ComponentCreator('/ur/advanced-ai-control/module-5-advanced-ai', '107'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/appendix/glossary',
                component: ComponentCreator('/ur/appendix/glossary', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/appendix/references',
                component: ComponentCreator('/ur/appendix/references', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/appendix/resources',
                component: ComponentCreator('/ur/appendix/resources', 'f15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/hardware-basics/module-3-hardware',
                component: ComponentCreator('/ur/hardware-basics/module-3-hardware', 'be7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/humanoid-design/module-6-humanoid-design',
                component: ComponentCreator('/ur/humanoid-design/module-6-humanoid-design', '7ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/intro',
                component: ComponentCreator('/ur/intro', '467'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/introduction/intro',
                component: ComponentCreator('/ur/introduction/intro', 'e20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/ros2-foundations/module-1-ros2',
                component: ComponentCreator('/ur/ros2-foundations/module-1-ros2', '619'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/ros2-foundations/ros2-hands-on',
                component: ComponentCreator('/ur/ros2-foundations/ros2-hands-on', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/simulation/digital-twins',
                component: ComponentCreator('/ur/simulation/digital-twins', 'cd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/simulation/gazebo-unity',
                component: ComponentCreator('/ur/simulation/gazebo-unity', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/simulation/module-2-simulation',
                component: ComponentCreator('/ur/simulation/module-2-simulation', 'b99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/vla-systems/module-4-vla-foundations',
                component: ComponentCreator('/ur/vla-systems/module-4-vla-foundations', '3fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/vla-systems/vla-action',
                component: ComponentCreator('/ur/vla-systems/vla-action', 'df3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/vla-systems/vla-hands-on-basic',
                component: ComponentCreator('/ur/vla-systems/vla-hands-on-basic', '991'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/vla-systems/vla-language',
                component: ComponentCreator('/ur/vla-systems/vla-language', 'cb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/vla-systems/vla-vision',
                component: ComponentCreator('/ur/vla-systems/vla-vision', '7f9'),
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
