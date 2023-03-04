 //simple example of callback hell
 /*Example 1:
 control---> setTimeout -> wait for ns --> print 1. 
            -->setTimeout -> wait for ns --> print 2. 
                 -->setTimeout -> wait for ns --> print 3. 
                   -->setTimeout -> wait for ns --> print 4. 
                        -->setTimeout -> wait for ns --> print 5. 
*/
 //  setTimeout(function() {
 //      console.log('1 Callback in setTimeout');
 //      setTimeout(function() {
 //          console.log('2 Callback in setTimeout');
 //          setTimeout(function() {
 //              console.log('3 Callback in setTimeout');
 //              setTimeout(function() {
 //                  console.log('4 Callback in setTimeout');
 //                  setTimeout(function() {
 //                      console.log('5 Callback in setTimeout');
 //                  }, 1000)
 //              }, 2000)

 //          }, 3000)

 //      }, 4000)

 //  }, 5000)

 /*Example 2 
 control---> setTimeout --> print 1. -> wait for 5s
            -->setTimeout  -> wait for 1s --> print 2.
                 -->setTimeout wait for 7s --> 
                   -->setTimeout --> print 4. -> wait for 3s  
                         -->setTimeout --> print 5. -> wait for 6s  
                                            print 3. 
                       
 */
 setTimeout(function() {
     console.log('1 Callback in setTimeout');
     setTimeout(function() {
         console.log('2 Callback in setTimeout');

     }, 1000)
     setTimeout(function() {
         console.log('3 Callback in setTimeout');

     }, 7000)
     setTimeout(function() {
         console.log('4 Callback in setTimeout');

     }, 3000)
     setTimeout(function() {
         console.log('5 Callback in setTimeout');
     }, 6000)

 }, 5000)