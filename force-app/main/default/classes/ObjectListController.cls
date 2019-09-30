
public with sharing class ObjectListController {


    @TestVisible
    private static Boolean testException = false;

    class testException extends Exception {}

    public ObjectListController(){

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
            Account[] accounts = [
                    SELECT
                            Name,
                            Id
                    FROM
                            Account
                    LIMIT 50
            ];


            returnObject.put('success', true);

            returnObject.put('accounts', accounts);
        } catch (Exception e) {
            String errorMessage = e.getMessage();

            System.debug('errorMessage: ' + errorMessage);

            returnObject.put('error', errorMessage);
            returnObject.put('success', false);
        }

        return returnObject;
    }

}