
export function CheckEvent({when,what}){
    console.log("WHAT: ",what)
    console.log("WHEN: ", when)
    const fun = what[0]
    const state = what[1]
    switch (fun) {
        case 'SB':
            console.log("SHOW BID ",state)
            break;
        case 'AE':
            console.log("AUCTION END: ", state)
            break;
    }

}