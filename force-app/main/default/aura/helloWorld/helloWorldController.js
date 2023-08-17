({
	myAction : function(component, event, helper) {
        var num1 = component.get("v.num1") + component.get("v.num2");
        component.set("v.result", num1);
	}
})