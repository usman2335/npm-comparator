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
    license?: string,
    date?: string,
    author?: string,
    maintainer?: string

  };
}
interface Package2 {
  name: string;
  version: string;
  description: string;
  keywords: string[];
  links: {
    homepage: string;
    repository: string;
    bugs: string;
  };
  license: string;
  date: string;
  author: {
    name: string;
    email: string;
    username: string;
  };
  maintainers: {
    username: string;
    email: string;
  }
  downloads:[{
    from: string,
    to: string,
    count: number

  }]
  communityInterest: number,
  downloadsCount: number,
  tests: number,
  carefulness:number;
  health:number;
  stars:number;
}

const apiURL = `https://api.npms.io/v2/search?q=`;
const packageURL = `https://api.npms.io/v2/package/`

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
            maintainer: result.package.maintainers
          }
          
        }));
        setPackages(packageList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
   
  }, [query]);

  return packages;
};

const dataFetcherPackage = (query: string): Package2[] => {
  const [packages, setPackages] = useState<Package2[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${packageURL}${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        const packageList: Package2[] = [{
          name: data.collected.metadata.name,
          version: data.collected.metadata.version,
          description: data.collected.metadata.description,
          keywords: data.collected.metadata.keywords,
          links: {
            homepage: data.collected.metadata.links.homepage,
            repository: data.collected.metadata.links.repository,
            bugs: data.collected.metadata.links.bugs
          },
          license: data.collected.metadata.license,
          date: data.collected.metadata.date,
          author: data.collected.metadata.author,
          maintainers: data.collected.metadata.maintainers,
          downloads: data.collected.npm.downloads,
          communityInterest: data.evaluation.popularity.communityInterest,
          downloadsCount: data.evaluation.popularity.downloadsCount,
          tests: data.evaluation.quality.tests,
          carefulness:data.evaluation.quality.carefulness,
          health:data.evaluation.quality.health,
          stars:data.collected.github.starsCount

        }];
        setPackages(packageList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
   
  }, [query]);

  return packages;
};


export default dataFetcherName;
export {dataFetcherPackage};




