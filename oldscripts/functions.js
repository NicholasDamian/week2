// function greetings(name) {
//     console.log("Hello " + name);
// }

// greetings("Nicholas");

// function add(a,b){
//  return a + b;
// }
//    console.log(add(5,8));

//    function isEven(num){
//        return num % 2 == 0; // the double equal sign is where the reult of true or false
//    }
//    var result = isEven();
//     console.log(result ? "Even" : "Odd");


    // function small(a,b){
    //     return a < b;
    // }
     
    
    // var numb1 =0
    // var numb2 =1
    
    

    // var result = small(0,1);

    // if (result == true){
    //     console.log(numb1);
    // } else{
    //     console.log(numb2);
    // }



    // function jump(a,b){
    //     return b , a 
    // }
    function average(array){
        var totalArray =0;
        for(var i = 0;i <= numbers1.length; i++){
        totalArray = totalArray + array[i];
    }
        return totalArray / array.length;
    }
    var arrayNumbers= [10,20,30,40];
    var bob = average(arrayNumbers);

    console.log(bob);



    