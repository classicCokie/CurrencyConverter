window.onload = function(){
    var config = require('./config.js')
    var DEFAULT_CURRENCY = config.defaultCurrency;
    var CURRENCY_UNITS = config.currencyUnits;

    renderCalculator();
    document.getElementById("currency-input-value").addEventListener("input", calculateCurrency);
    document.getElementById("currency-input-unit").addEventListener("change", changeInputCurrencyUnit);

    function renderCalculator() {
        var directive = document.getElementById('currency-calculator');
        var inputOptions = createDropdownOptions(CURRENCY_UNITS);
        var outputOptions = createDropdownOptions(CURRENCY_UNITS[DEFAULT_CURRENCY]);
        directive.innerHTML = createCalculaterTemplate(inputOptions, outputOptions);
    }

    function createDropdownOptions(units) {
        return Object.keys(units).reduce((result, key) => {
            var optionValue = (typeof units[key] === 'object') ? key : units[key];  
            result.push(`<option value="${optionValue}" >${key}</option>`);
            return result;
        },[])
    }

    function calculateCurrency() { 
        var conversionRateElement = document.getElementById('currency-output-unit');
        var conversionRate = conversionRateElement.options[conversionRateElement.selectedIndex].value;
        var inputValue = document.getElementById('currency-input-value').value;
        var ouputValue = inputValue * conversionRate;
        document.getElementById('currency-output-value').value = ouputValue;
    }

    function changeInputCurrencyUnit() {
        var outputUnitsElement = document.getElementById('currency-output-unit');
        outputUnitsElement.options.length = 0;
        createSelectOptions(outputUnitsElement, CURRENCY_UNITS[this.value] );
        calculateCurrency();
    }

    function createSelectOptions(outputUnitsElement,newOptions) {
        Object.keys(newOptions).map(optionName => {
            var option = document.createElement('option');
            option.value = newOptions[optionName];
            option.innerHTML = optionName;
            outputUnitsElement.appendChild(option);
        });
    }

    function createCalculaterTemplate(inputOptions, outputOptions) {
        return`<div class="currency-container">
                    <div class="currency-row">
                        <h1 class="currency-title"> Currency Calculator </h1>
                    </div>
                    <div class="currency-row">
                        <input class="currency-input" id="currency-input-value"/>
                        <select class="currency-select" id="currency-input-unit">
                            ${inputOptions}
                        </select>
                    </div>
                    <div class="currency-row">
                        <input class="currency-input" id="currency-output-value"/>
                        <select class="currency-select" id="currency-output-unit" />
                            ${outputOptions}
                        </select>
                    </div>
                </div>`
    }
}
