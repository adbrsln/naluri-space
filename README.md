# Naluri Space Project

The aim of this project is to calculate the circumference of the suns which some of the data is provided by the NASA website [NASA Sun Fact Sheets](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html).

## Software Requirements

- MySQL
- NodeJS 

## Installation

This script will run install the node packages in single command. 

```bash
git pull https://github.com/adbrsln/naluri-space.git
cd naluri-space
npm install && concurrently "npm:install-*"
```

## Usage

This script will run all the application in single command. 

```bash
cd naluri-space
concurrently "npm:watch-*"
```

after all the services is run, go to your web browser and go to `http://localhost:3001` to go to the webapp

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)