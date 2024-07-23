import { useEffect, useState } from 'react';


interface Package {
  package: {
    name: string,
    version: string,
    description: string,
    keywords: string[],
    links:{
      homepage: string,
      repository: string,
      bugs: string
    } 
    date: string,
    author: string,
    maintainer: string

  };
}

const apiURL = `https://api.npms.io/v2/search?q=`;

const dataFetcherName = (query: string): Package[] => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiURL}${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        const packageList : Package[]= data.results.map((result: any) => ({
          package : {
            name: result.package.name,
            version: result.package.version,
            description: result.package.description,
            keywords: result.package.keywords,
            links: {
              homepage: result.package.links.homepage,
              repository: result.package.links.repository,
              bugs: result.package.links.bugs
            },
            date: result.package.date,
            author: result.package.author,
            maintainer: result.package.maintainer
          }
          
        }));
        setPackages(packageList);
        // console.log("hello" +packages[0].package.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
   
  }, [query]);

  return packages;
};

export default dataFetcherName;




