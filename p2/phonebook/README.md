## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## More information
### `npm run server`
 Runs server while exist the *db.json* file located into the root folder
 Open [http://localhost:3001](http://localhost:3001) to view the information on your browser

 ### *How it works*
All information is located on db.json file, It's reading by use `json-server`
Into the package.json file was configured the line `"server": "json-server -p3001 --watch db.json"` on the argument "scripts" and located at the end orders configured

Additionally, the .env file include a line whit the argument `FAST_REFRESH=false`, it's allows refresh the modules of the app without mistakes or reload  throught the browser