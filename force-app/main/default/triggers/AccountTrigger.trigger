trigger AccountTrigger on Account (after insert, before delete, before insert) {
    if(Trigger.isAfter && Trigger.isInsert) {
        List<Contact> contacts = new List<Contact>();
        for(Account acct:Trigger.new) {
            Contact cont = new Contact();
            cont.AccountId = acct.Id;
            cont.LastName = acct.Name;
            cont.FirstName = 'Dummay';
            cont.Phone = acct.Phone;
           
            contacts.add(cont);
        }
        insert contacts;

    }

    else if(Trigger.isBefore) {
        if (Trigger.isDelete) {
            Set<Account> accts = new Set<Account>();
            
            for(Account acct:Trigger.old){
                accts.add(acct);    
            }
            
            Map<Id, Account> acctsMap = new Map<Id, Account>([select id, (select name from  contacts) from Account where id in :accts]);
            for (Account acct:Trigger.old) {
                
                if(acctsMap.get(acct.id).contacts.size() > 0) {
                    acct.addError('Unable to delete account because there is an associated contact');
                }
            }

        }
        else if(Trigger.isInsert) {
            for (Account acct:Trigger.new){
                if(String.isBlank(acct.Phone)){
                acct.Phone = '9897668765';
                }
            }
        }
    }
    
}