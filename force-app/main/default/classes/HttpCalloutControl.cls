public with sharing class HttpCalloutControl {
    @AuraEnabled 
    public static Map<String,Object> getCalloutResponseContents(String url) {
        
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(url);
        req.setMethod('GET');
        HttpResponse res = h.send(req);
        System.debug('response -> ' + res.getBody());

        Map<String,Object> resultMap = (Map<String,Object>)JSON.deserializeUntyped(res.getBody());
        return resultMap;
    }
}