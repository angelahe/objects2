import React from 'react';
import '../styles/Accounts.css';
import './community';

const CommunitySummary = (props) => {

  return(
    <div className = "SummaryText">
      <h2>Community Summary</h2>
      <span>Most Northern: </span>
      <span>{props.CommunityList.getMostNorthern()}</span><br/>
      <span>Most Southern: </span>
      <span>{props.CommunityList.getMostSouthern()}</span><br/>
      <span>Total Population:</span>
      <span>{props.CommunityList.getPopulation()}</span><br/>
      <br/>
    </div>
  )
}
export default CommunitySummary;