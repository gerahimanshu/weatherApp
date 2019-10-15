import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Select from '../components/select'
import {Utils} from '../utils';
import * as actions from '../redux/actions/dashboardActions';
import Weather from '../components/weather';
import Loader from '../components/loader';
import Sidebar from "react-sidebar";

class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false
        };
    }

    _handleSelectedCity = (e) => {
        if(e.target.value !== 'Select City'){
            this.props.dispatch(actions.getWeatherData(
                e.target.value, 
                this._getWeatherDataSuccessCallback, 
                this._getWeatherDataFailureCallback
            ))
        }else{
            this.props.dispatch(actions.clearWeatherData())
        }
    }

    _getWeatherDataSuccessCallback = () => {}

    _getWeatherDataFailureCallback = (error) => {
        alert(error);
    }

    onSetSidebarOpen = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    onLogout = () => {
        localStorage.setItem('access-token', '')
        this.props.history.go('/')
    }
    
    render(){
        const {weatherData, loading, cityName} = this.props.dashboard;
        if(loading){
            return <Loader />
        }
        return(
            <div>
                <h2>Select City</h2>
                <Select 
                    value={cityName}
                    data={Utils.cities}
                    onChange={this._handleSelectedCity}
                />
                {
                    weatherData && weatherData.currentWeatherData &&
                    <div className='weatherContainer'>
                        <div className='currentForecastView'>
                            <h3>Current Weather Data</h3>
                            <Weather type='current' weather={weatherData.currentWeatherData}/>
                        </div>
                        <div className='fiveDayForecastView'>
                            <h3>5 Day Weather Forecast Data</h3>
                            {
                                weatherData.fiveDayWeatherData.list.map((weather, index) => {
                                    return <Weather type='fiveDay' key={index} weather={weather}/>
                                })
                            }
                        </div>
                    </div>
                }
                <button onClick={this.onSetSidebarOpen}>About Us</button>
                <button onClick={this.onLogout}>Logout</button>
                {
                    this.state.sidebarOpen &&
                    <Sidebar
                        sidebar={
                            <div className='sideBarView'>
                                <h3>About Us</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        }
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        pullRight={true}
                        transitions={true}
                        styles={{ sidebar: { background: "white", width: '30%' }}}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard));