import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchSelectedCard, fetchWeatherForHoursinDay } from '../../redux/action';
import UndefinedNotification from '../../components/undefined-notification';
import Chart from '../../components/chart';
import {transformCityDataToDetail, convertToProperBackgroundFormat} from '../../Utils'
import './card.detaile.css';
import Spinner from '../../components/spinner';

 class CardDetaile extends Component {
    state = {
      main: null, 
    }
    componentDidMount = ()=> {
        this.fetchData()
    }
    componentDidUpdate =(prevProps) => {
        const { id } = this.props.match.params;
        if(prevProps.match.params.id !== id) {
            this.fetchData();
        }
    }

    fetchData =()=> {
        const { id } = this.props.match.params;
        this.props.fetchWeatherForHoursinDay(id);
        this.props.fetchSelectedCard(id);
        const {city} =this.props
        const { main } = transformCityDataToDetail(city)
            this.setState({
                main: convertToProperBackgroundFormat(main)
            })
    }
    render() {
        const {city} =this.props
        const {main= "rain"} = this.state;
       if(!_.isEmpty(city) && main !== null) {
        const {country, name, speed, pressure, description, humidity, sunrise, sunset } = transformCityDataToDetail(city);
        return (
            <div className="section-details">
                <div className="bg-video">
                <video className="bg-video-content" autoPlay muted loop>
                        <source src={require(`../../assets/video/${main}.mp4`)} type="video/mp4"/>
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
                     { _.isEmpty(this.props.error)  ? <Chart  data={this.props.chartData}/>: <UndefinedNotification info={this.props.error.message} />}       
                     </div>
                 <Link className="card-btn center" to="/">Back to Index</Link> 
                </div>    

            </div>
        )
       }else{
        return <Spinner />
       }

    }
}

const mapStateToProps = ({cardList: {activeCity, chartData, error}}) => {
return {
    city: activeCity,
    chartData, 
    error
}
}


export default connect(mapStateToProps, {fetchSelectedCard, fetchWeatherForHoursinDay})(CardDetaile)
