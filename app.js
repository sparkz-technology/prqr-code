import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Prompt the user to enter a URL
inquirer
  .prompt([
    {
      message: "Your URL",
      name: "url"
    }
  ])
  .then((answers) => {
    const url = answers.url;
    
    // Generate QR code image from the URL
    var qr_png = qr.image(url);

    // Pipe the QR code image to a PNG file
    qr_png.pipe(fs.createWriteStream("qr_png.png"));

    // Save the URL to a text file
    fs.WriteStream("url.txt", url, (err) => {
      if (err) throw err;
      console.log("The File has been saved !");
    });
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
