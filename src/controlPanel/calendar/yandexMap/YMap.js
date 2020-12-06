import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './YMap.css';


class YMap extends Component {
    constructor(props){
        super(props)
        this.state = {
            allGeoObjects: [],
            date: ""
        }
    }

    // async function get request
    async componentDidMount(){
        const response = await fetch("http://52.15.137.0:8080/api/geo");
        if(response.ok){
            const allGeoObjects = await response.json();
            this.setState({allGeoObjects});
        } else {
            console.log("Error while fetch data from an api");
        }
    }

    renderPlacemarks = () => {
          if(this.props.date != null){
              return this.state.allGeoObjects.map((f) => {
                  if(this.props.date === f.date){
                      return <Placemark 
                        key={Math.random()} 
                        geometry={[f.latitude, f.longitude]}
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            properties={
                                {
                                    hintContent: f.stationName,
                                    balloonContent: "Station name:" + f.stationName,
                                }
                            }
                        />;
                  }
              });
          }else {
            return this.state.allGeoObjects.map((f) => {
                return <Placemark
                            key={Math.random()}
                            geometry={[f.latitude, f.longitude]}
                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            properties={
                                {
                                    hintContent: f.stationName,
                                    balloonContent: "Station name:" + f.stationName,
                                }
                            }
                             />;
            });
        }
    }

    render() {
        return(
            <div>
                <YMaps>
                    <h3 className="header">НИР ГУАП</h3>
                    <Map className="mapss" defaultState={{ center: [59.975808, 29.899266], zoom: 10 }}>
                        {this.renderPlacemarks()}
                    </Map>  
                </YMaps>
            </div>
        );
    }
} export default YMap;
