function fibonachi(n) {
     if (n===1||n===2)
         {
            return 1;
         }else
            {
                return fibonachi(n-1)+fibonachi(n-2);
            }
}
 var number =+prompt('enter serial number');
 document.write(fibonachi(number));