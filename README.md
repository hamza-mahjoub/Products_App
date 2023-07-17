# NestJs Backend Template 
<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

## About The project

This repository contains the implemented frontend and backend of the product hunt case study.
<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Angular](https://angular.io/), Node.js framework for building client-side applications.
* [Node](https://nodejs.org/en), for server-side applications.
* [NPM](https://www.npmjs.com/) as package manager.

## Getting Started

In order to run this project you need to follow some few steps : 

### Prerequisites

* Make sure that Node.js is installed on your operating system. ( [Download Here](https://nodejs.org/en/download/))
* Angular CLI (Command Line Interface)
  ```sh
  npm install -g @angular/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/hamza-mahjoub/Products_App.git
   ```
2. Install NPM packages in each folder
   ```sh
   npm install
   ```
3. Add a **.env** file for the backend project
   ```sh
    NODE_ENV= development
    PORT= 3000
    ACCESS_TOKEN= <<Product_Hunt_Developer_Token>
    API_URL= https://api.producthunt.com/v2/api/graphql
   ```  
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
- Run the backend using 
```sh
   npm run dev
   ```
- Run the frontend using 
```sh
   ng serve
   ```
<p align="right">(<a href="#top">back to top</a>)</p>
