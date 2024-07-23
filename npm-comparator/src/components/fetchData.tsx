import React, { useState, useEffect } from 'react';



const apiURL = `https://api.npms.io/v2/search?q=`
interface props {
    query: string
}

interface Packages{
  package:{
    name: string,
    version: string,
    description: string
  }
  

}
const DataFetcher = ({query}: props) => {

const [packages, setPackages] = useState<Packages[]>([]);
useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await fetch(`${apiURL}${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      const packageList = data.results.map((result: any) => ({
        package: {
          name: result.package.name,
          version: result.package.version,
          description: result.package.description,
        },
      }));
      setPackages(packageList);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state here if needed
    }
  };
    fetchData();
},[])
  return (
    
    <div>
     
        <ul>
          {packages.map((p) => (
            <li key={p.package.name}>
              <a target="_blank" rel="noopener noreferrer">{p.package.name}</a>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default DataFetcher;

