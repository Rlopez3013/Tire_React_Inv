import React,{useContext} from 'react';

import MakerContext from "../makerContext/MakerContext";

const MakerList = () => {
  const [makers,setMakers] = useContext(MakerContext);


  return(
    <>
    {makers.map((maker) => (
      <makers maker={maker.maker} key={maker.id}/>
    ))}
    </>
  )
}

export default MakerList;