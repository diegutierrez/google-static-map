var fs = require('fs');
var gm = require('google-static-map').set('google-console-api-key');

var stream = gm()
    .zoom( 16 )
    .resolution( '962x250' )
    .address('-34.638493,-58.369617')
    .staticMap()
    .done();

stream.pipe(fs.createWriteStream('test.jpg'));

//http://maps.googleapis.com/maps/api/staticmap?
// center=-34.638493,-58.369617&
// zoom=16&
// size=962x250&
// markers=color:blue%7C-34.638493,-58.369617&
// format=jpg&
// sensor=false