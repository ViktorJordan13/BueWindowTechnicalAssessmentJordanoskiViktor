BlueWindow_TechnicalAssessment_TopBrands

author: Jordanoski Viktor
Email: viktorj560@gmail.com

Angular, Node, and MySQL
Navigate to backend/config/config.json and change the password to your MySQL password.
{
  "host": "localhost",
  "user": "root",
  "database": "posts",
  "password": "< password >"
}
Note: For development purposes the host is localhost but this will need to be updated if you decide to deploy the application. By Default, MySQL gives the user 'root' with all privileges. You can simply change this to another user if desired. In this application we named our database 'posts', however, if you went with a different name this will need to be changed.

cd backend
$ npm start
cd ../frontend
$ npm start

