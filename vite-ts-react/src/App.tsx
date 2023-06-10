import { useState } from 'react';
import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <Heading title="Hello" />
      <Section title="Different title">
        <p>Some content</p>
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={['coffee', 'tacos', 'code']}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </div>
  );
};

export default App;
