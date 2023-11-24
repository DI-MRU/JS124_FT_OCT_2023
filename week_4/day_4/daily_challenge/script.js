// Video class definition
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  // Instantiate a new Video instance and call the watch() method
  const video1 = new Video("Introduction to JavaScript", "JohnDoe", 300);
  video1.watch();
  
  // Instantiate a second Video instance with different values
  const video2 = new Video("Web Development Basics", "JaneSmith", 500);
  video2.watch();
  
  // Bonus: Use an array to store data for five Video instances
  const videoDataArray = [
    { title: "Video 1", uploader: "User1", time: 200 },
    { title: "Video 2", uploader: "User2", time: 400 },
    { title: "Video 3", uploader: "User3", time: 600 },
    { title: "Video 4", uploader: "User4", time: 800 },
    { title: "Video 5", uploader: "User5", time: 1000 }
  ];
  
  // Bonus: Loop through the array to instantiate those instances
  const videoInstances = [];
  for (const data of videoDataArray) {
    const video = new Video(data.title, data.uploader, data.time);
    videoInstances.push(video);
  }
  
  // Bonus: Call the watch() method for each instance in the array
  for (const videoInstance of videoInstances) {
    videoInstance.watch();
  }
  