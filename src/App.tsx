import { useEffect } from 'react';
import './App.css';
import Converter from './components/Converter/Converter';
import Graph from './components/Graph/Graph';
import { useConverter } from './store/store';
import { SelectValues } from './types/types';

function App() {
  const selectedOption = useConverter((state) => state.selectedOption);
  const handleSelectChange = useConverter((state) => state.handleSelectChange);
  const fetchDataByCurrency = useConverter(
    (state) => state.fetchDataByCurrency
  );
  const isInitialized = useConverter((state) => state.isInitialized);
  const currentData = useConverter((state) => state.currentData);
  const errMessage = useConverter((state) => state.errMessage);

  useEffect(() => {
    fetchDataByCurrency(
      selectedOption.value === SelectValues.BYN ? 'byn' : 'rub'
    );
  }, [selectedOption]);

  return (
    <div className="App">
      {errMessage ? (
        <p className="error">{errMessage} Try again later!</p>
      ) : isInitialized ? (
        <>
          <Converter
            actualData={currentData}
            selectedOption={selectedOption}
            handleSelectChange={handleSelectChange}
          />

          <Graph
            selectedOption={selectedOption}
            actualData={currentData}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
