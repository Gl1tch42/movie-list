import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const TrailerWrapper = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 10px auto;
`;

function Trailer({ url }) {
  return (
    <TrailerWrapper>
      {url ? (
        <ReactPlayer 
          url={url} 
          controls 
          width="100%" 
          height="100%" 
        />
      ) : (
        <p>Trailer não disponível</p>
      )}
    </TrailerWrapper>
  );
}

export default Trailer;
