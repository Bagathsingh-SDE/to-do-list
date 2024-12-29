import java.util.*;
class Mainc{

    public static  int[] threesome( int [] nums , int target){
        
        int n = nums.length;
        Arrays.sort(nums);
        
        int j =0;
        int k = n-1;
       int ans = 0;
       int i =0;
         while(i < k){
        
            ans = nums[i]  + nums[j] + nums[k];
            if( target > ans ){
                
                j++;
            }else if (ans > target){
                k--;
            }
              i++;
        }
          return new int[]{i,j,k} ;
        }
       
      
        
    public static void main(String[] args) {
        
    
          int [] ans = {1,2,4,3};
      int [] mc =  Mainc.threesome( ans , 3);
          
    System.out.println(mc );
    }
}

