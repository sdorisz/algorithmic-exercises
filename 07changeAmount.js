function changeAmount(amount){
    const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1 ];
    let count = 0;
    let usedNotes = [];
    for( let note of notes){
        if(amount / note >= 1){
            const noteCount = Math.floor(amount / note);
            if (noteCount >= 1){
                for (let i = 0; i < noteCount; i ++){
                    usedNotes.push(note);
                }
                amount -= noteCount*note;
                count += noteCount;
            }
        }
    }
    return { usedNotes, count};
}

//objektummal:
function changeAmount2(amount){
    const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1 ];
    let usedNotes = {};
    for( let note of notes){
        const noteCount = Math.floor(amount / note);
            if (noteCount >= 1){
                if(usedNotes[note] ===undefined){
                    usedNotes[note]=noteCount
                }else{
                usedNotes[note] += noteCount;
                
            }
            amount -= noteCount*note;
        }
    }
    return  usedNotes
}


console.log(changeAmount2(314))