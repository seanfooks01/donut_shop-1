  var StoreLocation = function(name, hours, avgDonutsPerCust, minCust, maxCust) {
    this.name = name;
    this.hours = hours;
    this.avgDonutsPerCust = avgDonutsPerCust;
    this.minCust = minCust;
    this.maxCust = maxCust;

    this.donutsPerHour = [];
    this.totalDonuts = 0;

    for(var i = 0; i < this.hours; i++) {
      var custPerHour = this.minCust + Math.floor(Math.random() * (this.maxCust - this.minCust));
      var donutsPerHour = custPerHour * this.avgDonutsPerCust;
      this.donutsPerHour[i] = donutsPerHour;
      this.totalDonuts += donutsPerHour;
    }
  }

  var hours = ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

  var downtown = new StoreLocation("Downtown", 11, 8, 27, 54);
  var capitolHill = new StoreLocation("Capitol Hill", 11, 13, 32, 60);
  var southLakeUnion = new StoreLocation("South Lake Union", 11, 15, 27, 56);
  var wedgewood = new StoreLocation("Wedgewood", 11, 9, 32, 64);
  var ballard = new StoreLocation("Ballard", 11, 3, 38, 70);

  var locations = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];

  var hoursOperation = document.getElementById("hours_operation");

  var locationsHead = document.createElement("th");
  hoursOperation.appendChild(locationsHead);
  locationsHead.textContent = "Location";

  for(var i = 0; i < hours.length; i++) {
    var hoursHead = document.createElement("th");
    hoursOperation.appendChild(hoursHead);
    hoursHead.textContent = hours[i];
  }

  var totalHead = document.createElement("th");
  hoursOperation.appendChild(totalHead);
  totalHead.textContent = "Total";

  var locationsTable = document.getElementById("locations_table");

  for(var i = 0; i < locations.length; i++) {
    var row = document.createElement("tr");
    locationsTable.appendChild(row);
    var locationName = document.createElement("td");
    row.appendChild(locationName);
    locationName.textContent = locations[i].name;

    for(var j = 0; j < hours.length; j++) {
      var donutsColumn = document.createElement("td");
      row.appendChild(donutsColumn);
      donutsColumn.textContent = locations[i].donutsPerHour[j];
    }

    var locationTotal = document.createElement("td");
    row.appendChild(locationTotal);
    locationTotal.textContent = locations[i].totalDonuts;
  }

  //var newLocation;

  //newLocation = document.getElementsByClass("new_location");

  //function addItem(e) {
    //e.preventDefault(); //Do I want the default in order to refresh the page to add the location to the table?
    //var enterNewLoc = document.createElement('td');
    //newLocation.appendChild(enterNewLoc);
    //enterNewLoc.textContent = newLocation;

  //}






//var newName, newMin, newMax, newAverage, newLocation;

//newName = document.getElementById("name");
//newMin = document.getElementById("min");
//newMax = document.getElementById("max");
//newAverage = document.getElementById("average");

//function addItem(e) {
  //e.preventDefault();
  //enterName = document.createElement('td');
  //newName.appendChild(enterName);
  //enterName.textContent = newName;
//}

//function updateTable() {
  //newLocation =
//}

//change to getElementsByClass()??
//That way I can grab all of the user input at one time to plug into the table?








