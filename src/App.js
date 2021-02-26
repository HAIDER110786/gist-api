import styled from 'styled-components'
import Header from "./components/Header";
import GistList from "./components/GistList";
import GlobalStyles from "./GlobalStyle";
import {useState} from 'react';

const App = () => {

  const [isSearched,setIsSearched] = useState('');

  return (
    <Wrapper className="App" data-testid="app">
      <Header setIsSearched={setIsSearched}/>
      <GlobalStyles />
      <GistList isSearched={isSearched}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;

//TO TYPECHECK 
/* /example/:id(\\d+) where `(\\d+)` is a regular 
expression that will only accept integers */

//NOT MAKING DUPLICATE calls
/* function(a) return a; useMemo((a)=>return a,[a]) 
here the useMemo function will run only when the a
is provided with a different value as compared to the last value*/
