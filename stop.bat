@echo off

echo Stopping the NodeJs-GraphQL server...
taskkill /F /IM nodemon.exe

echo Stopping the NodeJs-REST-API server...
taskkill /F /IM nodemon.exe

echo Stopping the React-Frontend server...
taskkill /F /IM node.exe

echo All Servers Stopped
