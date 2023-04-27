/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const express = require('express')
const TinyPool = require('./pool')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
//start pool
const pool = new TinyPool()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/pool', function(req, res) {
  // Add your code here
  if(pool.status){
    res.json({success: 'get call succeed!',data:pool.status,
     url: req.url});
  }else{
    res.json({error: 'fail', url: req.url});
  }
});

// app.get('/pool/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });

/****************************
* Example post method *
****************************/

app.post('/pool', function(req, res) {
  try {
    const fee = JSON.parse(req.body.fee)
    const data = await pool.addLiquidity(fee)
    res.json({success: 'get call succeed!',data:JSON.stringify(data),
     url: req.url});
  } catch (error) {
    console.log(error)
    res.json({success: 'Failed!',data:error,data:error,url: req.url});
  }
});

// app.post('/pool/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'post call succeed!', url: req.url, body: req.body})
// });

/****************************
* Example put method *
****************************/

// app.put('/pool', function(req, res) {
//   // Add your code here
//   res.json({success: 'put call succeed!', url: req.url, body: req.body})
// });

// app.put('/pool/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'put call succeed!', url: req.url, body: req.body})
// });

/****************************
* Example delete method *
****************************/

// app.delete('/pool', function(req, res) {
//   // Add your code here
//   res.json({success: 'delete call succeed!', url: req.url});
// });

// app.delete('/pool/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'delete call succeed!', url: req.url});
// });

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
