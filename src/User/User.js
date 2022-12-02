import React from 'react';

const User = (props) => {
    const condition=props.condition;
    let greetings;
    if(condition){
        greetings= <p>Welcome my friend</p>
    }
    else{
        greetings=<p>who tha tell, are you</p>
    }
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
                
            </div>
            <div>
                <h2>Food</h2>
                {
                   condition ? greetings=  <p>I Wel by food for you</p>: greetings=<p>Lets eat his his whose whose?</p>//akany condition kora hoisy sort style a
                    
                }
               
                
            </div>
            <div>
                <h2>Connection</h2>
                {
                    condition && <p>Let's join my facebook</p> // single condition ...else na takly ata use kora hoy
                }
                
            </div>
        </div>
    );
};

export default User;