### Exporting/Importing Code

Once we have our code split into files, let's export it. That would make it available for any other files that import it. 

There are two ways to export code:
1. Default exports - when you need to export only one value/function
2. Grouped exports - when you need to export multiple values/functions

#### Default exports & imports

Say we want to export one simple function that sums two values. Our function is already stored in `sum.js`:
```
const sum = (a, b) => (a + b);
```

We could either append a default export statement at the end of the file:
```
export default sum;
```

Or, a cleaner way would be to export the function without naming it (since the name is implicitly added by the name of the file that exports it):

```
export default (a, b) => (a + b);
```

Now, say we needed the `sum` function in an `index.js` file. Importing it would look like so:
```
const sum = require('./sum');
```
Notice how we're adding a `./` before the name of the file. This is a relative path, and it indicates that the file is stored on the same folder than our index.js file. 

Now, we could call our function the same way as if it was declared on our index.js file:
```
const result = sum(3, 5);
```
