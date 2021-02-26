import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {getPublicGists} from "../services/gistService"
import {getGistForUser} from "../services/gistService"
import Gist from "./Gist";

const GistList = ({isSearched}) => {

  const [gistList,setGistList] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  useEffect(()=>{

    if(isSearched === ''){
      //if the isSearched prop is '', showing the list of public gists
      setLoading(true);
      getPublicGists()
      .then(res => {
        setGistList(res.data);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message)
        setLoading(false);
      })
    }
    else{
      //if the isSearched prop has some text, showing the list of gist for that text
      setLoading(true);
      getGistForUser(isSearched)
      .then(res => {
        setGistList(res.data);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message)
        setLoading(false);
      })
    }
  },[isSearched])

  return(
    <Post>
        {
          loading 
          ? <ErrorLoadingNull><h1>Loading...</h1></ErrorLoadingNull>
          : error
            ? <ErrorLoadingNull><h1>{error}</h1></ErrorLoadingNull>
            : <GistPosts>
                {
                  gistList.length > 0 
                  ? gistList.map(gist => <Gist key={gist.id} gist={gist} />)
                  : <ErrorLoadingNull><h1>There are no gists by this user</h1></ErrorLoadingNull>
                }
              </GistPosts>
        }
    </Post>
  )
}

const Post = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;

const ErrorLoadingNull = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
`;

const GistPosts = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`

export default GistList
