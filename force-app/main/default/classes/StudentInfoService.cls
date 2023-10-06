@RestResource(urlMapping='/studentInfo/*')
global with sharing class StudentInfoService {
    global class StudentInfo {
        String studentName{get;set;}
        String studentAddress{get;set;}
        String studentPhone{get;set;}
        String schoolName{get;set;}
       
        
    }

    @HttpGet
    global static StudentInfo getStudent() {
        RestRequest request = RestContext.Request;

        String studentId = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);
        student__c student = [select id, Name, Address__c, student_name__C, phone_number__c, school__r.name from student__c where id=:studentId];
        StudentInfo stdInfo = new StudentInfo();
        stdInfo.studentName = student.Student_Name__c;
        stdInfo.studentAddress = student.Address__c;
        stdInfo.studentPhone = student.Phone_Number__c;
        stdInfo.schoolName = student.School__r.Name;

        return stdInfo;
    }
}