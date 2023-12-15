import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

export const readFile = () => {
  // Use import.meta.url to get the current module's URL
  const currentUrl = new URL(import.meta.url);
  // Use fileURLToPath to convert the URL to a file path
  const currentPath = fileURLToPath(currentUrl);
  // Use path.dirname to get the directory name
  const __dirname = path.dirname(currentPath);

  const filePath = path.join(__dirname, "./files/file-data.txt");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};
