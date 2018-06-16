fs.readFile('database/example.json', function(err, data) {
    // json data
    var jsonData = data;
    // parse json
    var jsonParsed = JSON.parse(jsonData);
    // access elements
    console.log(jsonParsed);
});
