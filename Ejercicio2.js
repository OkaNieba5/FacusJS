function calificacion(calif){
    switch (calif){
    
        case 0,1,2:
         
                return ("Muy deficiente");
    
        case 3,4:
        
          
                return (" Insuficiente ");

        case 5:
       
                return (" Suficiente ");
        
        case 6:
            
                return (" Bien ");

        case 7,8:
       
                return (" Notable ");

        case 9,10:
           
                return (" Sobresaliente ");
        
        case 11,-1:
           
             return (" No corresponde ");    
    

    }

}
console.log(calificacion(3))