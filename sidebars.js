/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'Overview',
    {
      type: 'category',
      label: 'Architecture',
      items: ['Architecture/Overview','Architecture/UniveralRouter','Architecture/ChildRouter','Architecture/messenger'],
    },
    'WhatAreOurFeatures',
    {
      type: 'category', 
      label: 'How to use',
      items: ['How-to-use/Protocol', 'How-to-use/Subscriber', 'How-to-use/Staker'],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: ['User-Guide/HowToUse', 'User-Guide/AddStakeForEarn'],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: ['Use-Cases/CopyTrading', 'Use-Cases/VulnerableContractAlert', 'Use-Cases/Blacklist'],
    }
  ],

};

module.exports = sidebars;
