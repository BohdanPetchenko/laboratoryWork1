import { useEffect, useState } from 'react';
import { Card, InputNumber, Typography, Button } from 'antd';
import { CheckOutlined, CloseOutlined, RedoOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const Trainer = ({
  min,
  max,
  level
}) => {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [value, setValue] = useState(null);
  const [answerHistory, setAnswerHistory] = useState([])

  useEffect(() => {
    getRandomArbitrary(min, max, true)
    getRandomArbitrary(min, max, false)
  }, [answerHistory])



  function getRandomArbitrary(min, max, isSecondNumber) {
    let random = Math.floor(Math.random() * (max - min) + min);

    isSecondNumber ? setFirstNum(random) : setSecondNum(random)

    return random
  }

  function handleClickButton() {
    if (value === firstNum * secondNum) {
      setAnswerHistory([...answerHistory, true])
    } else {
      setAnswerHistory([...answerHistory, false])
    }
    setValue(null)
  }


  return (
    <Card title={`Level ${level} (range ${min} ... ${max})`} bordered={false} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {answerHistory.length < 10 && (
        <>
          <span>{`${firstNum} * ${secondNum}=`}</span>
          <InputNumber autoFocus min={1} value={value} onChange={n => setValue(n)} style={{ marginRight: 20 }} onPressEnter={handleClickButton}/>
          <Button type="primary" icon={<CheckOutlined />} onClick={handleClickButton} style={{ marginRight: 20 }}>
            OK
          </Button>
          <Button type="primary" shape="circle" icon={<RedoOutlined />} onClick={() => setAnswerHistory([])} />
          <div>
            {answerHistory.map(item => {
              if (item) {
                return <CheckOutlined key={Math.random()} style={{ color: 'green', marginRight: 10 }} />
              }
              else {
                return <CloseOutlined key={Math.random()} style={{ color: 'red', marginRight: 10 }} />
              }
            })}
          </div>
        </>)}
      {answerHistory.length >= 10 &&
        <>
          <p>{answerHistory.includes(false) ? 'You have errors, please try again!' : max === 100 ? 'Super! You have completed all levels!' : 'Fine! You can proceed to the next level!'}</p>
          <Button type="primary" shape="circle" icon={<RedoOutlined />} onClick={() => setAnswerHistory([])} />
        </>}
    </Card>
  );
};
