/* Name: Akshat Pande
College: Amity University Lucknow */

/* Index
1- Imported required packages
2- Initialized application with settings
3- Helper Functions
4- Routes
5- Server Initialized */

// Importing Packages
const express = require('express'),
     path = require('path'),
     bodyParser = require('body-parser')

var app = express();
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended:true }));


// Global Variables for column object and turn counter
var collect = 0
var counter = 1


// Javascript alternative of Python's Zip
function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}


// Reset Assets of game
function createCollection(){
    collect =  {1:[0],
                2:[0],
                3:[0],
                4:[0],
                5:[0],
                6:[0],
                7:[0]}
    counter = 1
}


// Not implemented, advanced part
function checkFour(){
    let arr = convertArray();

}


// Convert columns object to 2D Array
function convertArray(){
    var arr = new Array();

    for(let i=0; i<7; i++){
        let l = collect[i+1].length;
        let t = new Array();

        for(let j=0; j<(7-l); j++)
            t.push(" ");
        
        for(j = 0; j<l-1; j++){
            t.push(collect[i+1][j]);
        }
        arr[i] = t;
    }

    return zip(arr); 
}


// Return array in a Game Specific Format
function showCollection(){
    return convertArray();
}


// ------- Routes --------


// Welcome Screen
app.get('/', function (req, res) {
    str = "Welcome to the Game" + "\n\n Collect Four \n\n" + "Available Urls:\n\n 1- /start \n 2- /play/<column_number>";
    res.end(str);
});


// Reset the game
app.get('/start', function (req, res) {
    createCollection();
    res.send("Ready")
});


// Insert coin in a column
app.get('/play/:col', function (req, res) {
    
    // Condition to control a direct play
    if(counter == 1){
        createCollection();
    }

    // Get heightt of column
    let column = req.params['col']
    
    // Corner case to check column range
    if(column > 0 && column < 8){
        
        // Check turn is even or odd and height overflow of column
        if(counter % 2 == 0 && collect[column].length < 7){
            collect[column].unshift('R')
        }
        else if(counter % 2 != 0 && collect[column].length < 7){
            collect[column].unshift('Y')
        }
        else{
            // Move not possible
            res.send("Invalid Move")
        }
    
    counter ++
    
    // Not Implemented, will be used in future
    checkFour();
    
    res.send(showCollection())
}
    else{
        res.end("Column out of context")
    }
});


// Initialize Server
var server = app.listen(app.get('port'), ()=>{
    console.log('App listening on 4000');
});

