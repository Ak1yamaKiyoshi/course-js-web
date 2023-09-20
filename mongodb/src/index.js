
const http = require('http');
const fs = require('fs');
const { dbSchema } = require('./config/path');
const {task } = require('./features/todopage');

function getTaskList() {
    // db call 
    return [{object: dbSchema, id: "0"}, {object: dbSchema, id: "1"}];
} 

function tasksToHtml(list) {
    output = "";
    list.forEach(taskdata => {
        obj = taskdata.object;
        id = taskdata.id;
        output += task(obj, id); 
    });
    return output;
}


function handleGet(request, response) {
    const html = tasksToHtml(getTaskList());
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
}

function handlePost(request, response) {
    request.on('data', function(data) {
        let userData = {}
    });

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`<div><p>post request</p></div>`);
}


const server = http.createServer(function(request, response) {
  if (request.method == 'POST') 
    handlePost(request, response);
  else 
    handleGet(request, response );
});


const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);
