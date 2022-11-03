import './App.css';
import { NoStateManagementContainer } from './NoStateManagement/NoStateManagementContainer'
import { ContextApiContainer } from './ContextApiManagement/ContextApiContainer'
import { ReduxContainer } from "./ReduxManagement/ReduxContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Just Props</h1>
        <NoStateManagementContainer></NoStateManagementContainer> 
        <h1>Context API</h1>
        <ContextApiContainer></ContextApiContainer>
        <h1>Redux</h1>
        <ReduxContainer></ReduxContainer>
      </header>
    </div>
  );
}

export default App;
