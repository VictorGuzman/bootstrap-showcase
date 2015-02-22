$(document).on('click', '#generate-button', function(event) {
  var age, ageDescription, chartData, name, valid;
  valid = $('#chart-form').validate().form();
  if (valid) {
    name = getName();
    age = getAge();
    ageDescription = getAgeDescription();
    chartData = getChartData();
    return generateChart(name, age, ageDescription, chartData);
  }
});

$(function() {
  return validateForm();
});