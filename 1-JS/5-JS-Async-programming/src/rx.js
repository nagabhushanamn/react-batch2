

import { Subject } from 'rxjs'

const jsStream = new Subject(); // Observable-stream


// trainer-module ( service )
//-------------------------------------

let idx = 0;
let inteval = setInterval(() => {

    // server sent event ( SSE ), HTTP 

    idx++;
    console.log('Tnr - propagating change/data/event');
    jsStream.next('topic-' + idx)
    if (idx === 2)
        jsStream.error('webex crashed')
    if (idx === 3) {
        clearInterval(inteval);
        console.log('Tnr - propagating complete signal');
        jsStream.complete();
    }
}, 2000);

//-------------------------------------



//participant-module  ( UI )
//-------------------------------------

jsStream.subscribe(
    newTopic => console.log('Participant - subscribing result : ' + newTopic),
    error => console.log('Participant - subscribing error : ' + error),
    () => console.log('thanks for all topics, bye')
);

//-------------------------------------