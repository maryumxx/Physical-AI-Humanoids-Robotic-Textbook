import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Physical-AI-Humanoids-Robotic-Textbook/about',
    component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/about', '727'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoids-Robotic-Textbook/contact',
    component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/contact', '2f3'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoids-Robotic-Textbook/docs',
    component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs', '0f9'),
    routes: [
      {
        path: '/Physical-AI-Humanoids-Robotic-Textbook/docs',
        component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs', '273'),
        routes: [
          {
            path: '/Physical-AI-Humanoids-Robotic-Textbook/docs',
            component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs', '0cb'),
            routes: [
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/intro',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/intro', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/nodes-topics-services',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/nodes-topics-services', '1b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/python-rclpy-bridge',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/python-rclpy-bridge', '3c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/ros-middleware',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/ros-middleware', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/urdf-humanoids',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/urdf-humanoids', '437'),
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
    path: '/Physical-AI-Humanoids-Robotic-Textbook/',
    component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/', '876'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
