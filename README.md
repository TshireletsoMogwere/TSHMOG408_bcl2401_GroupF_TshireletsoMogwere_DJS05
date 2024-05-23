# Building a Redux-Inspired Store for a Tally App

**Project Brief**
I created a redux-inspired store to manage and log the state of a counting Tally App. My goal was to manage the state of the app changes effeciently by focusing on core functionalities like increment, decrement and reset. 

I first initialized my default count so the count state's is set to 0 before anything is run. I followed with an update function that allows the state count to be modified without affecting the default state and that is where my core functions are inserted. I then created the tallyStore using the reducer parameter which argues on how the state transitions based on different actions. I used the dispatch method to allow state changes by sending actions to the store. I foloowed with subscribing to the store to accept functions that gets called when state changes. Lastly I initialized the state, internal actions and retrieved current states of stores to console the values.

**Running the code**
The original outcome of my state count is 0, 2, 1 and 0. You can modify the state count by either adding or subtracting any type of number then consoling to see the changed outcomes.

**Challenges faced**
No major challenges were faced. I only had syntax errors which were a quick fix.

**Learning overview**
I had fun creating store, it was not a complicated challenge but I did gain important knowledge from it.



