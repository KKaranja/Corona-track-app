import React from 'react';

import styles from "./App.module.css";
import { fetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./components";

import coronaImage from "./images/images.png"

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const getData = await fetchData();

    this.setState({ data: getData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

   this.setState({data: fetchedData, country: country});
    // fetch data

    // setState
  };

  render() {
    const { data , country} = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App