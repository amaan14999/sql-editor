![atlan-sql-editor](https://socialify.git.ci/amaan14999/atlan-sql-editor/image?font=Inter&language=1&name=1&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Dark)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# Atlan Frontend Task - SQL Editor: QUERTY

Link to the hosted app: [https://atlan-sql-editor.pages.dev](https://atlan-sql-editor.pages.dev/)

## Introduction

This application is a frontend task for Atlan. It is a SQL Editor which can be used to write and execute SQL queries and to analyze the output. The application is built using ReactJS. The application is hosted on Cloudflare Pages.

A detailed description of the problem statement is given at the end of the document

## Features

- The application is built using ReactJS.
- Supports syntax highlighting for SQL queries.
- Supports autocomplete for SQL keywords.
- Supports bracket matching, and auto-closing of brackets.

## Installation

- Clone the repository using

  ```bash
  git clone https://github.com/amaan14999/atlan-sql-editor.git
  ```

- Install the dependencies using

  ```bash
  npm i
  ```

- Run the application using

  ```bash
  npm start
  ```

- The application will be hosted at [http://localhost:5173](http://localhost:5173)

## Data

The data used in the application is downloaded from [mockaroo.com](https://www.mockaroo.com/). Mockaroo is a free test data generator website. It is used to generate realistic test data. The data is stored locally, in a JSON object in the `assets` folder, in a file named `Data.js`.

## Page Speed and Load Time

To evaluate the performance of this web application, I utilized Google Lighthouse, a comprehensive tool for auditing the quality of web pages. This tool was instrumental in providing insights into the page speed and load times of this application.
The analysis included measurements of key performance indicators such as

- First Contentful Paint,
- Time to Interactive, and
- Speed Index.

The results of the analysis are as follows:
