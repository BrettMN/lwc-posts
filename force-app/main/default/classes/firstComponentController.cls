public with sharing class firstComponentController {

    @TestVisible
    private static Boolean testException = false;

    class testException extends Exception {}


    public firstComponentController() {

    }

    @AuraEnabled(cacheable=true)
    public static Map<String, Object> init(){
        Map<String, Object> returnObject = new Map<String,Object>();
        returnObject.put('success', false);

        System.debug('UserID: ' + UserInfo.getUserId());

        try {
            if(testException){
                throw new testException('I\'ve got a bad feeling about this');
            }
            User u = [
                SELECT
                    Name,
                    CompanyName,
                    Phone,
                    Email
                FROM
                    User
                WHERE 
                    Id =: UserInfo.getUserId()
            ];


            returnObject.put('success', true);

            returnObject.put('user', u);
        } catch (Exception e) {
            String errorMessage = e.getMessage();
        
            System.debug('errorMessage: ' + errorMessage);

            returnObject.put('error', errorMessage); 
            returnObject.put('success', false);  
        }

        return returnObject;
    }
}

