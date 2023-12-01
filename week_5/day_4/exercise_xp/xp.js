// ex1
async function fetchData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Call the async function
  fetchData();
  
//   ex2  Analyze

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?
// 'calling' will be logged.
// After a 2-second delay,'resolved' will be logged.