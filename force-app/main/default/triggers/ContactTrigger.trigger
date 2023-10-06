trigger ContactTrigger on Contact (after insert, after update) {
    switch on Trigger.operationType {
        when AFTER_UPDATE {
           ContactTriggerService.updateAccount(Trigger.new, Trigger.oldMap);
        }
    }

}