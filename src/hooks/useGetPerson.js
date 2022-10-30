import { useState, useEffect } from "react";
import axios from 'axios'

const useGetPerson = (API) => {
	const [person, setPerson] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setPerson(response.data);
	}, [])

  return person
}


  
  export default useGetPerson ;