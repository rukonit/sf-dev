public with sharing class ContactTriggerService {
    public static void updateAccount(List<Contact> contacts, Map<Id, Contact> contactsOld){
        Set<Id> accountIds = new Set<Id>();
        
        for (Contact cont:contacts) {
            if (String.isNotBlank(cont.AccountId) && contactsOld.get(cont.Id).Active__c != cont.Active__c && contactsOld.get(cont.id).AccountId == cont.AccountId) {
                accountIds.add(cont.AccountId);
            }
            else if (contactsOld.get(cont.id).AccountId != cont.AccountId) {
                accountIds.add(cont.AccountId);
                accountIds.add(contactsOld.get(cont.id).AccountId);
            }
        }

        List<Account> actList = new List<Account>();
        List<AggregateResult> ar =   [select AccountId, count(id) activeCont from contact where AccountId in :accountIds and Active__c = true group by accountId];

         
        for (AggregateResult acs: ar) {
            Integer count = Integer.valueOf(acs.get('activeCont'));
            String accountId = String.valueOf(acs.get('AccountId'));
            Account ac = new Account(Id = accountId, Active_contacts__c = count);
            actList.add(ac);
        }
       
       
       
      

        update actList;
    }
}