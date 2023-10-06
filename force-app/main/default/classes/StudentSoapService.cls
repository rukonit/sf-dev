global with sharing class StudentSoapService {
    webService static Student__c getStudentById(String id) {
        Student__c student = [select id, Student_Name__c, Email__c, Phone_Number__c, Address__c from Student__c
        where id=:id
        ];
        return student; 
    }
}