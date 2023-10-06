({
    getResponse : function(component) {
        var action = component.get("c.getCalloutResponseContents");
        action.setParams({
            "url": "http://data.fixer.io/api/latest?access_key=ae9ae16a84b5d87a7678f026d9dd147c"
        });
        action.setCallback(this, res => {
            var state = res.getState();
            console.log(state);
            if(component.isValid && state == 'SUCCESS') {
                component.set("v.response", res.getReturnValue());
                var getAllRates = component.get("v.response")['rates'];
                var CurrencyList = [];
                CurrencyList.push('Rukon')

                for(var key in getAllRates) {
                    CurrencyList.push(key+'='+getAllRates[key])
                   
                }

                component.set("v.ListOfCurrency", CurrencyList);
                for(var i in CurrencyList) {
              
                    console.log(i + ' ' +CurrencyList[i])
                }
            }
        })
        $A.enqueueAction(action);
    
    }
})
