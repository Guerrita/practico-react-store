import React, {useEffect, useState} from "react";
// import ItemList from "@containers/ItemList";
import banner from "@logos/optimized-banner.jpg";
// import useGetItems from "../Hooks/useGetItem";
// import {Character} from "@components/Character";



const Patients = () => {
  //let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  //let allItems = useGetItems(api)
  //let [fetchedData, updateFetchedData] = useState([]);
  //let { info, results } = allItems;

  return (
    <section>
    
      <img className="banner" src={banner} />
        {/* 
      <ItemList >
      {results?.map(character => (
          <Character character = {character} key= {character.id}/>
        ))}
      </ItemList>
      <button onClick={() => {updatePageNumber(pageNumber+1);}}>Click me</button> */}
    </section>
  );
};

export default Patients;
