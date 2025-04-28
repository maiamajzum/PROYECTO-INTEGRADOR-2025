function procesar(arr, callback) {
    return arr.map(callback);  
  }
  
 
  console.log(procesar([1, 2, 3], x => x * 2));
