 @IsTest
public with sharing class firstComponentControllerTest {
    public firstComponentControllerTest() {

    }

    @IsTest
    static void testInitSuccess(){

        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User']; 

        User contextUser = new User(
            FirstName = 'Test1', 
            LastName ='TestL',
            Email = 'test@test.com',
            Phone = '987-654-3210',
            Username = 'Test@test.com.test' + Datetime.now().getTime(),
            Alias = 'test', 
            CommunityNickname = 'test',
            TimeZoneSidKey = 'America/Chicago', 
            LocaleSidKey = 'en_US', 
            EmailEncodingKey = 'UTF-8', 
            ProfileId = p.Id, 
            LanguageLocaleKey = 'en_US'
        );

        insert contextUser;

        Map<String,Object> results = new Map<String,Object>();
        // Test.startTest();
        System.runAs(contextUser){
            results =  firstComponentController.init(); 
        }
        // Test.stopTest();

        System.assertNotEquals(null, results); 
        System.assertEquals(true, results.get('success'));

        User userResult = (User)results.get('user');
        System.assertNotEquals(null, userResult); 
        System.assertEquals(contextUser.FirstName + ' ' + contextUser.LastName, userResult.Name);
        System.assertEquals(contextUser.CompanyName, userResult.CompanyName);
        System.assertEquals(contextUser.Phone, userResult.Phone);
        System.assertEquals(contextUser.Email, userResult.Email);
    }

    @IsTest
    static void testInitFail(){

        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User']; 

        User contextUser = new User(
            FirstName = 'Test1', 
            LastName ='TestL',
            Email = 'test@test.com',
            Phone = '987-654-3210',
            Username = 'Test@test.com.test' + Datetime.now().getTime(),
            Alias = 'test', 
            CommunityNickname = 'test',
            TimeZoneSidKey = 'America/Chicago', 
            LocaleSidKey = 'en_US', 
            EmailEncodingKey = 'UTF-8', 
            ProfileId = p.Id, 
            LanguageLocaleKey = 'en_US'
        );

        insert contextUser;

        firstComponentController.testException = true;

        Map<String,Object> results = new Map<String,Object>();
        // Test.startTest();
        System.runAs(contextUser){
            results =  firstComponentController.init(); 
        }
        // Test.stopTest();

        System.assertNotEquals(null, results); 
        System.assertEquals(false, results.get('success'));
    }
}

