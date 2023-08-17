({
    locationChange : function(component, event, helper) {
        var token = event.getParam("token");
        
        if(token.indexOf('contact/') === 0) {
            
           var contactId =  token.substr(token.indexOf('/') +1);
           console.log(contactId);
           var action = component.get("c.findById");
           action.setParams({contactId: contactId})
        }
        action.setCallback(this, function(res) {
            component.set("v.contact", res.getReturnValue());
        }
        
        );
        $A.enqueueAction(action);
    }
})
