export const DefaultAmchartConfig = (items) => {
  return ({
      type: "serial",
      theme: "light",
      pathToImages: "http://cdn.amcharts.com/lib/3/images/",
      marginRight: 40,
      marginLeft: 40,
      autoMarginOffset: 20,
      mouseWheelZoomEnabled: false,
      valueAxes: [{
        id: "v1",
        axisAlpha: 0,
        position: "left",
        ignoreAxisWidth: true
      }],
      chartScrollbar: {
        graph: 'g1',
        oppositeAxis: false,
        offset: 10,
        scrollbarHeight: 30,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.1,
        selectedBackgroundColor: '#888888',
        graphFillAlpha: 0,
        graphLineAlpha: 0.5,
        selectedGraphFillAlpha: 0,
        selectedGraphLineAlpha: 1,
        autoGridCount: true,
        color: '#AAAAAA'
      },
      chartCursor: {
        pan: true,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 1,
        cursorColor: "#258cbb",
        limitToGraph: "g1",
        valueLineAlpha: 0.2,
        valueZoomable: true
      },
      valueScrollbar: {
        oppositeAxis: false,
        offset: 50,
        scrollbarHeight: 10
      },
      export: {
        enabled: true
      },
      legend: {
        labelText: "[[title]]",
        valueText: false,
      },
      categoryField: "mese",
      dataProvider: items,
      listeners: [{
        event: "init",
        method: function(e) {
          e.chart.zoomToIndexes(0, 12);
        }
      }],
    }

  )
}
