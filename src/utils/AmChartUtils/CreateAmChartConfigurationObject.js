import {DefaultAmchartConfig} from './DefaultAmChartConfig'

export const CreateAmChartConfigurationObject = (array,items) => {

  const graphs = []

  array.map((item,key) =>
    graphs.push(makeSingleGraph(item.title,item.value,key))
  )

  const configuration = Object.assign({graphs},DefaultAmchartConfig(items))

  return configuration
}

const makeSingleGraph = (title,value,index) => {

  const singleGraph = {
    title,
    id: `g${index}` ,
    valueField: value,
    bullet: "round",
    bulletSize: 1,
    dashLength: 1,
    colorField:"color",
    balloonFunction: function(graphDataItem, graph) {
      const value = graphDataItem.values.value;
      return `${title}: ${value.toFixed(2)} €`
    }
  }

  return singleGraph
}