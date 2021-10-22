import React, { useEffect, useState } from 'react';
import RenderDashboardPage from './RenderDashboardPage';
import TitleComponent from '../../common/Title';
import ServiceMap from './ServiceMap';
// import {connect} from 'react-redux';
// import {getAllMapActions} from '../../../state/actions/mapsActions';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

function DashboardContainer() {
  const [info, setInfo] = useState([
    {
      program_name: '',
      service_date: '',
      service_time: '',
      service_value: '',
      service_quantity: null,
      service_unit_name: null,
      service_entry_notes: '',
      service_entry_data: {},
      service_type_name: '',
      service_type_description: '',
      recipient_first_name: '',
      recipient_last_name: '',
      provider_first_name: '',
      provider_last_name: '',
      address: '',
      address_line2: '',
      city: '',
      state: '',
      zip: null,
      location_longitude: null,
      location_latitude: null,
    },
  ]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/maps`)
      .then(res => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div className="dashboard">
      <div className="sub-header center">
        <TitleComponent TitleText="Dashboard" className="center" />
        <div>
          <ServiceMap data={info} />
        </div>
      </div>
      <RenderDashboardPage className="dashboard-page" />
    </div>
  );
}

// const mapStateToProps = (state) =>{
//   console.log('Servicemap.js', state.maps);
//   return {
//     maps: state.maps
//   };
// };

// export default connect(mapStateToProps, {getAllMapActions})(DashboardContainer);
export default DashboardContainer;
