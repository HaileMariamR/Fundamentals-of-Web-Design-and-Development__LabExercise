var request = indexedDB.open("first index db", 1);
request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore('person', { keyPath: 'id' });
    objectStore.createIndex('name', 'name', { unique: false });
    objectStore.createIndex('email', 'email', { unique: true });
  }
  function add() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .add({ id: 1, name: 'Jam', age: 24, email: 'jam@example.com' });

  request.onsuccess = function (event) {
    console.log('The data has been written successfully');
  };

  request.onerror = function (event) {
    console.log('The data has been written failed');
  }
}

add();