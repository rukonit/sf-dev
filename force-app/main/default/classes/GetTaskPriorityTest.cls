@isTest
public with sharing class GetTaskPriorityTest {
    public GetTaskPriorityTest() {

    }

    @isTest
    static void taskPriorityTest(){
        
       String value = GetTaskPriority.GetTaskPriority('US');
        System.assertEquals('High', value);
        
    }
    @isTest
    static void taskPriorityTestOther(){
        String actual = GetTaskPriority.GetTaskPriority('CN');
        System.assertEquals('Normal', actual);
    }
    @isTest
    static void taskPriorityTestElse(){
        String actual =  GetTaskPriority.GetTaskPriority('');
        System.assertEquals(null, actual);
    }
}