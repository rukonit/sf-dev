({
    doInit : function(component, event, helper) {
        var action=component.get("c.findAll");
        action.setCallback(this, function(a) {
            component.set("v.contacts", a.getReturnValue());
        });
        $A.enqueueAction(action)
    },
    searchKeyChange : function(component, event, helper) {
        var searchKey = event.getParam("searchKey");
        
        var action=component.get("c.findByName");
        action.setParams({searchKey:searchKey})
        action.setCallback(this, function(a) {
            component.set("v.contacts", a.getReturnValue());
            
        });
        console.log("Rukon");
        $A.enqueueAction(action)
    }
})