import { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import { Tabs } from 'antd';

import { Trainer } from './Trainer';
const { TabPane } = Tabs;

function App() {
  const [currentLevel, setCurrentLevel] = useState(1);


  return (
    <Tabs activeKey={currentLevel} onChange={level => setCurrentLevel(level)} centered>
      <TabPane tab="Level 1" key="1">
        <Trainer min={10} max={20} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 2" key="2">
        <Trainer min={20} max={30} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 3" key="3">
        <Trainer min={30} max={40} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 4" key="4">
        <Trainer min={40} max={50} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 5" key="5">
        <Trainer min={50} max={60} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 6" key="6">
        <Trainer min={60} max={70} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 7" key="7">
        <Trainer min={70} max={80} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 8" key="8">
        <Trainer min={80} max={90} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 9" key="9">
        <Trainer min={90} max={99} level={currentLevel} />
      </TabPane>
      <TabPane tab="Level 10" key="10">
        <Trainer min={10} max={100} level={currentLevel} />
      </TabPane>
    </Tabs>
  );
}

export default App;
