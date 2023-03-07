// Code your solution here
function findMatching(list, name) {
    return list.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();

    });
}
function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
  }

  function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
  }