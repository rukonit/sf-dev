({
	getOutput : function(component, event, helper) {
		var name = component.find("name").get("v.value");
        var outName = component.find("nameOut");
        outName.set("v.value", name);
	}
})