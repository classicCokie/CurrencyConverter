# CurrencyConverter

## Usage
### How to use Currency Calculator on your Webpage

Using Currency Calcuator on your Webpage is simple it only involves three Steps:

#### 1. Step
Include the "currency.min.js" from the dist folder on your website like so:
```
 <script type="text/javascript" src="currency.min.js" />
```
#### 2. Step
Include the "currency.css" file from the css folder on your website like so:
```
 <link rel="stylesheet" type="text/css" href="currency.css">
```
#### 3. Step
Add the currency Calculator div to you webpage, where you want it.
```
 <div id="currency-calculator" />
```
Thats it! Make sure not to change the id of the div, otherwise things won't work.

## Customisation

### Custom Styling
All Styling of the Currency Converter is done in the currency.css file. You may adjust the css however you want.

### Custom Currency Input
#### Preface
Before you can start customizing, you need to install watchify:
(if you do not have npm installed this obivously won't work. Make sure you have node and the npm package manager installed before you proceed)

```
 npm i -g watchify
```
After you installed watchify you may proceed by starting the watchify bundler like so:
```
 npm run develop
```
#### Changing the Currency Units
To change the Currency Units you can simply go into the js folder and open the config.js file. The config file looks like this:
```
'Euro': {
    'US Dollar': 1.2897,
    'Schweizer Franken': 1.2897,
    'Britisch Pfund': 1.2897
},
'US Dollar': {
    'JPY': 109.6200
},
'Schweizer Franken': {
    'US Dollar': 1.2897
},
'Britisch Pfund': {
    'CAD': 1.7574
}   
``` 
Each key represents the input currency, the contents of the coresponding object are the target currencies and their respective conversion rate.
You can change the values in any manner you like to add, remove or change currencies. However do make sure to not change the structure of the json, otherwise the calculator will no longer work.

#### Building your changes
After you are done with your changes you may quit watchify. You can then use browserfy and uglify to create a production ready version. First install the tools:
```
npm install -g uglify-es
```
then use the following command to build you minified version:
```
npm run production
```
This will rebuild the currency.min.js file in your dist folder.

## Use Cases
* As a user I want to be able to enter a amount in my input currency
* As a user I want to see the converted output currency after I entered the input currency
* As a user I want to be able to change the currency Unit for out put and input
* As a developer I want to be able to ovveride the currencys with my own
* As a developer I want to have minimal effort to integrate the calculator in my webpage


