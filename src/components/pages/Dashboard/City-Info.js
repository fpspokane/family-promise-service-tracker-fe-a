// This component renders the dummy info during the Pop-up on Click
import * as React from 'react';

function CityInfo(props) {
  const { info } = props;
  const displayName = `${info.program_name}`;

  return (
    // service name, date
    // be able to cycle through if there are more than 1 in the area
    // button to go to more detailed view
    <div className="popup-service-info">
      <div className="service-basic-info">
        {displayName}
        <p>
          {info.service_type_name} provided by {info.provider_first_name}{' '}
          {info.provider_last_name}
        </p>
        <address>
          Address: {info.address} {info.address_line2}
          <br />
          {info.address_line2 ? `Suite: ${info.address_line2}` : null} <br />
          Zip: {info.zip}
          <br />
          City: {info.city}
          <br />
        </address>
      </div>
    </div>
  );
}

export default React.memo(CityInfo);
