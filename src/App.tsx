import { useEffect } from 'react';
import './App.css';
import Converter from './components/Converter/Converter';
import Graph from './components/Graph/Graph';
import { useConverter } from './store/store';
import { SelectValues } from './types/types';

function App() {
  const dataRUB = useConverter((state) => state.dataToRUB);
  const dataBYN = useConverter((state) => state.dataToBYN);
  const selectedOption = useConverter((state) => state.selectedOption);
  const handleSelectChange = useConverter((state) => state.handleSelectChange);
  const fetchDataByCurrency = useConverter(
    (state) => state.fetchDataByCurrency
  );
  const isFetching = useConverter((state) => state.isFetching);
  const isInitialized = useConverter((state) => state.isInitialized);
  const currentData = useConverter((state) => state.currentData);

  useEffect(() => {
    fetchDataByCurrency(
      selectedOption.value === SelectValues.BYN ? 'byn' : 'rub'
    );
  }, [selectedOption]);

  return (
    <div className="App">
      {isInitialized ? (
        <>
          <Converter
            actualData={currentData}
            selectedOption={selectedOption}
            handleSelectChange={handleSelectChange}
          />

          {/* <Graph
        data={selectedOption.label === SelectValues.BYN ? dataBYN : dataRUB}
        selectedOption={selectedOption}
      /> */}
        </>
      ) : null}
    </div>
  );
}

export default App;
