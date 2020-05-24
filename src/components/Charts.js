import React from 'react'
import PropTypes from 'prop-types'
import Chart from './Chart'
import '../assets/css/charts.scss'

const Charts = ({ items }) => {
/*
  TODO: CHARTS?
*/
  const configRateArray = [
    {title: 'Rata', value: 'rata' },
    {title: 'Quota Capitale', value: 'quotaCapitale' },
    {title: 'Quota Interessi', value: 'quotaInteressi' },
  ];

  const configCapitaleArray = [
    {title: 'Debito Residuo', value: 'debitoResiduo' },
    {title: 'Capitale Versato', value: 'capitaleVersato' },
  ];

  return (
  <div id="charts-container">
    <Chart items={items} configArray={configRateArray}/>
    <Chart items={items} configArray={configCapitaleArray}/>
  </div>
)
}

Charts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    mese: PropTypes.number.isRequired,
    quotaInteressi: PropTypes.number.isRequired,
    quotaCapitale: PropTypes.number.isRequired,
    rata: PropTypes.number.isRequired,
    capitaleVersato: PropTypes.number.isRequired,
    debitoResiduo: PropTypes.number.isRequired
  })).isRequired,
}

export default Charts
