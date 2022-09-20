<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AhmedHamdyAmeen/Image_resize_UdacityProject.git">
    <h3 align="center">Image Processing API</h3>
  </a>
</div>
<br /><br />

---

<br />

<!-- ABOUT THE PROJECT -->

## About The Project

**This** is a Backend Project that allow user to get a list of images and resize them..
This is a project supported by Udacity sponsored form egFWD..

<br />

---

<br />

### Built With

- [![Nodejs][nodejs.org]][node-url]
- [![Express][express.com]][express-url]

<!-- Title /  Logo Src / a href -->

<br />

---

<br />

<!-- GETTING STARTED -->

## Getting Started

To get start with the project you need to follow the instructions:

### Prerequisites

- You need to install The node package manger (NPM) & nodejs & MongoDB
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AhmedHamdyAmeen/Image_resize_UdacityProject/tree/master
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the Backend Server

   ```sh
   npm start
   ```

4. Test the Endpoint

   ```sh
   npm run test
   ```

5. Build the Project

   ```sh
   npm run build
   ```

6. Run the ESLint

   ```sh
   npm run lint
   ```

7. Run the ESLint and fix the issues
   ```sh
   npm run lint:f
   ```
   <br />

---

## Used Endpoint

To get started with the image Resizing you should use the "**resize**" endpoint.. and Enter the image Name, width, and height of the image..
Ex: http://localhost:8080/resize?width=850&height=700&imgName=a

**Note:** you should provide a valid values.. valid
width & height: Valid Integer..
imgName: valid string & image name must be is one of the provided images... which are: [a.jpg, p.jpg, c.jpg, d.jpg, e.jpg]
<br />

[nodejs.org]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=nodejs&logoColor=4FC08D
[node-url]: https://nodejs.org/en/
[express.com]: https://img.shields.io/badge/Express.js-35495E?style=for-the-badge&logo=express&logoColor=4FC08D
[express-url]: https://expressjs.com/
