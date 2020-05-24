import React from 'react'
import PropTypes from 'prop-types'
import 'amcharts3'
import 'amcharts3/amcharts/serial'
import 'amcharts3/amcharts/themes/light'
import AmCharts from '@amcharts/amcharts3-react'

import { CreateAmChartConfigurationObject } from '../utils/AmChartUtils/CreateAmChartConfigurationObject'

const Chart = ({ items, configArray }) => {

  const config = CreateAmChartConfigurationObject(configArray,items)

  return (
    <div className="chart-container">
      <AmCharts.React options={config} style={{width: "100%",height:"300px"}}/>
    </div>
)
}

Chart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    mese: PropTypes.number.isRequired,
    quotaInteressi: PropTypes.number.isRequired,
    quotaCapitale: PropTypes.number.isRequired,
    rata: PropTypes.number.isRequired,
    capitaleVersato: PropTypes.number.isRequired,
    debitoResiduo: PropTypes.number.isRequired
  })).isRequired,
  configArray: PropTypes.arrayOf(PropTypes.any),
}

export default Chart

