({
	update: function(component, evt, helper) {
var expense = component.get("v.expense");
var updateEvent = $A.get("e.namespace:updateExpenseItem");
updateEvent.setParams({ "expense": expense }).fire();
}
})