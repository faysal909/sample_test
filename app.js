// time section 
function time(){
    const time = new Date();
    const timeSection = time.getHours();
    if(timeSection>=12){
        greet = 'good afternoon';

    }else{
        greet = 'good morning'
    }
   return greet;
}
// message section
function greetings(greets,name){
    function getName (){
        if(name){
            return name.split(' ')[0]
        }else{
            return '';
        }
    }
    const welcomeMsg = 'welcome back!'
    console.log(welcomeMsg);
    const message = 'hi '+ greets +' '+getName()+'!';
    
    console.log(message) 
}

// const value = time();
// console.log(value);
greetings(time(),'faysal al mamun ')