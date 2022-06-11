// Code your solution here
function findMatching(names, searchName){
    return names.filter(driver => searchName.toLowerCase() === driver.toLowerCase())
  }

  function fuzzyMatch(names, searchStr){
    return names.filter(driver => driver.startsWith(searchStr))
  }

  function matchName(names, nameStr){
    return names.filter(driver => driver.name === nameStr)
  } 