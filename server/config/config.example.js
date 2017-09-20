//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://Jgruber27:jamesgruber1227@ds129394.mlab.com:29394/cenassignment3', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyBKdMmDRil43Tub9-7LYosl_D6_t1DA8AA'
  },
  port: 8080
};