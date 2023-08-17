public class GetTaskPriority {

    public static String GetTaskPriority(String country) {
        if (country.length()>2 || String.isBlank(country)) {
            return null;
        }

        if(country == 'US') {
            return 'High';
        }
        else {
            return 'Normal';
        }
       
    }


}