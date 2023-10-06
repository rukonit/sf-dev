import { LightningElement, track } from 'lwc';
const options=
[
    {label:'USD',value:'USD'},
    {label:'EUR',value:'EUR'},
    {label:'CAD',value:'CAD'},
    {label:'GBP',value:'GBP'},
    {label:'INR',value:'INR'}
];
export default class HTTPCalloutLWC extends LightningElement {

    @track fromCurrencyValue;
    @track toCurrencyValue;
    @track options=options;
    @track toCurrencyOptions=options;
    @track conversionData;

    handleFromCurrencyChange(event) {
        this.fromCurrencyValue = event.target.value;
        console.log('From Currency: ' + this.fromCurrencyValue)
    }

    handleToCurrencyChange(event) {
        this.toCurrencyValue = event.target.value;
        console.log('To Currency: ' + this.toCurrencyValue)
    }

    async handleCurrencyConversion() {
        let endpoint = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+this.fromCurrencyValue+'&to_currency='+this.toCurrencyValue
        +'&apikey=97M6MST7HGN4FHW6';

        await fetch(endpoint,
            {
                method: "GET",
                headers: {
                    "Content-Type":"application/json"
                }
            }
            ).then(
                (res) => { 
                    console.log(res.status)
                    return res.json()}
            
            
            ).then(res => {
                let objData = {
                    From_Currency_Name:'',
                From_Currency_Code:'',
                To_Currency_Name:'',
                To_Currency_Code:'',
                Last_Refreshed:'',
                Exchange_rate:''
                };
             

                let exchangeData = res['Realtime Currency Exchange Rate']
                

        objData.From_Currency_Code=exchangeData['1. From_Currency Code'];
        objData.From_Currency_Name=exchangeData['2. From_Currency Name'];
        objData.To_Currency_Name=exchangeData['4. To_Currency Name'];
        objData.To_Currency_Code=exchangeData['3. To_Currency Code'];
        objData.Last_Refreshed=exchangeData['6. Last Refreshed'];
        objData.Exchange_rate=exchangeData['5. Exchange Rate'];
        this.conversionData=objData;

        console.log(JSON.stringify(objData))
              

            }).catch(error => {
                console.log('Callout error ' + JSON.stringify(error))
            })


    }

}