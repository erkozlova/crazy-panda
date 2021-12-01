import React, { FC } from 'react';
import Table from './components/Table/Table';
import { TITLE_FIRST, DATA_FIRST } from './data/data_1';

const App: FC = () => {
  return (
    <>
      <Table titles={TITLE_FIRST} dataDefault={DATA_FIRST} />
    </>
  );
};

export default App;
