import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import SearchAppBar from './AppBar';
import CircularIndeterminate from './Progress';
import ImgMediaCard from './Card';

const instance = axios.create({
  timeout: 10000,
  headers: {'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
  'X-RapidAPI-Key':'309d482cacmsh8f913bd2575f0b0p1f5f0cjsn15854d289313'}
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      url: "https://community-open-weather-map.p.rapidapi.com/find?cnt=10&type=link%2C+accurate&units=metric&q=",
      data:[],
      status:true
    };
    this.searched=this.searched.bind();
    this.loader1=this.loader1.bind();
  }

  loader1=()=>{
      if(this.state.status){
        return(<CircularIndeterminate/>)
      }else if(this.state.status=='not'){
        return ('Select a City');
      }else{
        return ('Done!')
      }
    }

  searched=()=>{
    var txt=document.getElementById('searchText').value;
    if(txt!==""){
      instance.get(this.state.url+txt)
      .then((r)=>{
        console.log(r.data.list);
        this.setState({data:r.data.list});
      })
      .catch((e)=>{
        console.log(e.response);
      })
    }else{
      alert('Input a City');
    }
    
  }

  render() {
    if(this.state.isLoading){
      const loading='Loading'
    }else{
      const loading='Please select a City';
    }
    
    
    const Weather=this.state.data.map((v,i)=>{
      var main=v.weather.map((x,t)=>{
        return x.main;
      });
      var description=v.weather.map((x,t)=>{
        return x.description;
      });
      return (
        <ImgMediaCard>
          city={v.name}
          date={v.dt}
          tempNow={v.main.temp}
          tempMax={v.main.temp_max}
          tempMin={v.main.temp_min}
          humidity={v.main.humidity}
          pressure={v.main.pressure}
          tempNow={v.temp}
          windDir={v.wind.deg}
          windSpeed={v.wind.speed}
          mainDesc={main}
          secDesc={description}
          clouds={v.clouds.all}
        </ImgMediaCard>
      )
    });
    return (
      <div>
       <SearchAppBar onSearch={this.searched}/>
       <center><h3>{loading}</h3></center>
       {Weather}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
