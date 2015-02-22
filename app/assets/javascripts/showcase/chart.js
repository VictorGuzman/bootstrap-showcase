
this.getChartData = function() {
  var internetInput, phoneInput, sportInput, tvInput;
  tvInput = $('#tv-input').val();
  internetInput = $('#internet-input').val();
  phoneInput = $('#phone-input').val();
  sportInput = $('#sport-input').val();
  return [parseInt(tvInput), parseInt(internetInput), parseInt(phoneInput), parseInt(sportInput)];
}

this.getName = function() {
  var nameInput;
  nameInput = $('#name-input').val();
  return nameInput;
};

this.getAge = function() {
  var ageInput;
  ageInput = $('#age-input').val();
  return ageInput;
};

this.getAgeDescription = function() {
  var ageInput;
  ageInput = $('#age-input').val();
  if (ageInput >= 0 && ageInput <= 5) {
    return "Infant";
  } else if (ageInput > 5 && ageInput <= 12) {
    return "Kid";
  } else if (ageInput > 12 && ageInput <= 25) {
    return "Teen";
  } else if (ageInput > 25 && ageInput <= 60) {
    return "Adult";
  } else {
    return "Elder";
  }
};

this.generateChart = function(name, age, ageDescription, chartData) {
  $('#chart').html('');
  return $('#chart').highcharts({
    chart: {
      type: 'column',
      margin: 75,
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 25,
        depth: 70
      }
    },
    title: {
      text: name + "'s Activity Hours"
    },
    subtitle: {
      text: "Age: " + age + " - " + ageDescription
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    xAxis: {
      categories: ["TV", "Internet", "Phone", "Sports"]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    series: [
      {
        name: 'Activities',
        data: chartData
      }
    ]
  });
};