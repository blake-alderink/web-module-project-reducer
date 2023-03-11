# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* dipatch runs the reduce function with the given parameter.  the addOne parameter returns the type of action which is add one.  this then returns from the reduce function state + 1 as state's new value.
...

* TotalDisplay shows the total plus 1.
