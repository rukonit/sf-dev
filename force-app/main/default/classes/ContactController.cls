public with sharing class ContactController {

    @AuraEnabled
    public static List<Contact> findAll(){
        return [SELECT ID, NAME, PHONE FROM Contact];
    }

    @AuraEnabled
    public static List<Contact> findByName(String searchKey) {
        String name = '%' + searchKey + '%';
        return [SELECT id, name, phone FROM Contact WHERE name LIKE :name LIMIT 50];
    }
    
    @AuraEnabled
    public static Contact findById(String contactId) {
        return [select id, name, title, phone, MobilePhone, Account.Name from Contact where id =:contactId limit 1];
    }

}