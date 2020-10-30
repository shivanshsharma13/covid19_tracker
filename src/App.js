import './App.css';
import {MenuItem, FormControl, Select, CardContent, Card} from "@material-ui/core";
import { useEffect, useState } from 'react';
import Infobox from './Infobox';
import Table from './Table';
import { sortData } from './Utils';
import LineGraph from './LineGraph';


function App() {

  const [contries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);


  useEffect(() =>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((responce) => responce.json())
    .then((data) => {
      setCountryInfo(data);
    });
  }, []);




  useEffect(() => {
    
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
      .then(responce => responce.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }));

          const sortedData = sortData(data);
          setCountries (countries);
          setTableData(sortedData);
      });
    };
    getCountriesData();
  }, [])


    const onCountryChange = async (event) => {
      const contrycode = event.target.value;
      setCountry(contrycode);  

      const url = contrycode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${contrycode}`
    
        await fetch(url)
        .then(responce => responce.json())
        .then(data => {
          setCountry(contrycode)
          setCountryInfo(data);
        })

    }

    
 
  return (
    <div className="app">

      <div className="app__left">

        
        <div className="app__header">
          <h1>Covid19 tracker</h1>
          <FormControl classNmae="app__dropdown">
              <Select variant="outlined" onChange={onCountryChange} value={country}>
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                  {contries.map((country) => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                  ))}
              </Select>
          </FormControl>
        </div>

          <div className="app__stats">
          <Infobox title="Corona Virus Cases" total={countryInfo.cases}  cases={countryInfo.todayCases}/>
          <Infobox title="Corona Virus Recoverd" total= {countryInfo.recovered} cases= {countryInfo.todayRecovered}/>
          <Infobox title="Corona Virus Deaths" total={countryInfo.deaths} cases= {countryInfo.todayDeaths}/>
          </div>
          
          <LineGraph />
      </div>
      
      <div className="app__right">
            <Card>
              <CardContent>
                <h3>Live cases in World</h3>
                  <Table countries={tableData}/>
                <h3>World cases</h3>
                
              </CardContent>
            </Card>
      </div>
      
        
      
    </div>
  );
} 

export default App;
