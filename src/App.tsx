import React, { FC } from 'react';
import Table from './components/Table/Table';
import { TITLE_FIRST, DATA_FIRST } from './data/data_1';

type Titles = {
  title: string;
  id: string;
  key: string;
  sorter: (a: unknown, b: unknown) => number;
}[];

const App: FC = () => {
  return (
    <>
      <Table titles={TITLE_FIRST as Titles} dataDefault={DATA_FIRST} />
    </>
  );
};

export default App;
