async function resolveAll(promises) {
    try {
      // Promise.all returns a single promise that resolves when all input promises have resolved,
      // and it rejects if any of the input promises reject.
      const results = await Promise.all(promises);
      return results;
    } catch (error) {
      // If any of the promises in the array reject, this catch block will handle the error.
      console.error('An error occurred:', error);
      throw error; // Re-throw the error if needed.
    }
  }
  
  // Example usage:
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
  });
  
  // Call the resolveAll function with an array of promises.
  resolveAll([promise1, promise2, promise3])
    .then((resultArray) => {
      console.log('Expected output:', resultArray);
    })
    .catch((error) => {
      console.error('Handle any errors here:', error);
    });