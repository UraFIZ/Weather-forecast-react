import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchSelectedCard, fetchWeatherForHoursinDay } from '../../redux/action';
import UndefinedNotification from '../../components/undefined-notification'
import Spenner from '../../components/spinner'
import Chart from '../../components/chart';
import {transformCityDataToDetail, convertToProperBackgroundFormat} from '../../Utils'
import './card.detaile.css';

 class CardDetaile extends Component {
     constructor(props) {
         super(props)
         const { id } = this.props.match.params;
         this.props.fetchWeatherForHoursinDay(id);
         this.props.fetchSelectedCard(id);
     }
    // componentDidMount = () => {

    // }

    render() {
       const {city} =this.props
       console.log(city)
       if(!_.isEmpty(city)) {
        const {country="", name="", speed, pressure, description, humidity, sunrise, sunset, main } = transformCityDataToDetail(city);
        const mainForBG = convertToProperBackgroundFormat(main);
         return (
             <div className="section-details">
                 <div className="bg-video">
                 <video className="bg-video-content" autoPlay muted loop>
                         <source src={require(`../../assets/video/${mainForBG}.mp4`)} type="video/mp4"/>
                         Your browser is not supported!
                     </video>
                 </div>
                  <div className="details-wrapper">
                      <div className='details-header'>
                          <h2 className="details-title"> Weather in {name}, {country}</h2> 
                      </div>
                      <div className="details-body">
                      <h4 className="details-subtitle">Detail information</h4> 
                          <table>
                              <tbody>
                              <tr>
                                  <td>Wind: </td>
                                  <td>{speed} m/s</td>
                              </tr>
                              <tr>
                                  <td>Cloudiness: </td>
                                  <td>{description}</td>
                              </tr>
                              <tr>
                                  <td>Pressure: </td>
                                  <td>{pressure} hpa</td>
                              </tr>
                              <tr>
                                  <td>Humidity: </td>
                                  <td>{humidity} %</td>
                              </tr>
                              <tr>
                                  <td>Sunrise: </td>
                                  <td>{sunrise}</td>
                              </tr>
                              <tr>
                                  <td>Sunset: </td>
                                  <td>{sunset}</td>
                              </tr>
                              </tbody>
                          </table>
                      <h4 className="details-subtitle">Chart of temp for hours</h4> 
                      {this.props.chartData !== undefined ? <Chart  data={this.props.chartData}/>: <UndefinedNotification info={"The data is not available"} />}       
                      </div>
                  <Link className="card-btn center" to="/">Back to Index</Link> 
                 </div>    
 
             </div>
         )
       }else{
         return <Spenner />
       }
       
    }
}

const mapStateToProps = ({cardList: {activeCity, chartData}}) => {
return {
    city: activeCity,
    chartData
}
}

export default connect(mapStateToProps, {fetchSelectedCard, fetchWeatherForHoursinDay})(CardDetaile)
