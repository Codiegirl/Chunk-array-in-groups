function chunkyArrayInGroups(arr, size) {
    var groups = [];//holds the arrarys
    while (arr.length > 0) {
      groups.push(arr.slice(0, size));
      arr = arr.slice(size);
  
    }
    return groups;
  
  }
  chunkyArrayInGroups(["a", "b", "c", "d"], 2);
  
  //with the .splice method
  function chunkArrayInGroups(arr, size){
    var groups = [];
    while (arr.length > 0){
      groups.push(arr.splice(0, size))
      }
      return groups;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2)