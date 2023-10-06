public with sharing class ContactManager {


    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Integer recordLim) {
        return [select id, lastname, phone from contact limit :recordLim];
    }
}