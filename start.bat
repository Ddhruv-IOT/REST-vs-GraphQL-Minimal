@echo off

echo Starting the NodeJs-GraphQL server...
cd ./GraphQL-API/nodeBackend
start /MIN nodemon
timeout /T 3

echo Starting the NodeJs-REST-API server...
cd ../../
cd ./REST-API/nodeBackend
start /MIN nodemon
timeout /T 3

echo Bringing UP the React-Frontend
cd ../../
cd ./React-Frontend
start /MIN npm run dev

echo "All Servers are UP & Running"
timeout /T 3

echo Opening the web page...
start http://localhost:5173/

