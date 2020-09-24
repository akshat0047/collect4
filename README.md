# collect4

### Completion
- Minimum Requirement


### Variables for Coins
- Y: Yellow
- R: Red


### Tech-Stack Used
- Node.js
- Express


### Checks Implemented
- Overflow of a column by returning 'Invalid Move'
- Column Number out of Range


### Output Form
- Format: *JSON*
- Representation: 6*7 Matrix
- Advantages: The matrix can be directly mapped to frontend in further development


### API Documentation
- /
Welcome Screen

- /start
Resets the game and start the turn from Yellow

- /play/<column_no>
Drops a coin in the given column number
- Yellow coins on odd turns
- Red coins on even turns


### Deployment Details
- Platform: Heroku
- GitHub Repository: https://github.com/akshat0047/collect4 (Problem Statement Confidential)
- Procedure: https://devcenter.heroku.com/articles/getting-started-with-nodejs
- HOSTED-URL: https://pratilipi-akshat.herokuapp.com/


### Approach
- Create a JS Object with column number as keys
- Insert elements in beginning
- Convert the object to 2D Array representing the Game Grid
- Return Response