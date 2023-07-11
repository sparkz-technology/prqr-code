# prqr-code

This is a simple Node.js script that generates a QR code image from a URL entered by the user. It also saves the URL to a text file.

## Installation

To run this script, you need to have Node.js and npm installed on your system. You also need to install the following dependencies:

- inquirer: A library for creating interactive command-line interfaces
- qr-image: A library for generating QR codes
- fs: A built-in module for working with the file system

To install the dependencies, run the following command in the project directory:

```bash
npm install
```

## Usage

To run the script, use the following command:

```bash
node app.js
```

You will be prompted to enter a URL. After entering a valid URL, the script will generate a QR code image and save it as `qr_png.png` in the project directory. It will also save the URL to a text file called `url.txt` in the project directory.

