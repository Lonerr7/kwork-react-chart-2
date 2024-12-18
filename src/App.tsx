import { useEffect } from 'react';
import './App.css';
import Converter from './components/Converter/Converter';
import Graph from './components/Graph/Graph';
import { useConverter } from './store/store';
import { SelectValues } from './types/types';

function App() {
  const {
    currentData,
    errMessage,
    fetchDataByCurrency,
    handleSelectChange,
    isInitialized,
    isDataOutdated,
    selectedOption,
  } = useConverter();

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
            isDataOutdated={isDataOutdated}
          />
          <Graph
            selectedOption={selectedOption}
            actualData={currentData}
            isDataOutdated={isDataOutdated}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
