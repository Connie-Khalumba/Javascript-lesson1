for (let i = 0; i < 10; i++) {
    if (i % 2 == 0){
        continue;
    }

    console.log("Loop with continue: odd Numbers"+ i);
    }

    for (let i = 0; i < 20; i++) {
        if (i % 2 === 1){
            continue;
        }
    
        console.log("Loop with continue: even Number"+ i);
        } 
        
        // Another way to solve this is below

        for (let i = 0; i < 20; i++) {
            if (i % 2 !== 0){
                continue;
            }
        
            console.log("Loop with continue: even Number"+ i);
            }  