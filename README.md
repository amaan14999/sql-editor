![sql-editor](https://socialify.git.ci/amaan14999/atlan-sql-editor/image?font=Inter&language=1&name=1&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Dark)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# SQL Editor: QUERTY

Link to the hosted app: [https://atlan-sql-editor.pages.dev](https://atlan-sql-editor.pages.dev/)

## Introduction

This application is a SQL Editor which can be used to write and execute SQL queries and to analyze the output. The application is built using <strong>ReactJS</strong>.
<br/>
The application is hosted on Cloudflare Pages.

A detailed description of the problem statement is given at the end of the document

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Data](#data)
- [Page Speed and Load Time](#page-speed-and-load-time)
- [Summary of the Problem Statement](#summary-of-the-problem-statement)
  - [Objective](#objective)
  - [Key Features](#key-features)
  - [Specifications](#specifications)
  - [User Experience](#user-experience)
  - [Technical Requirements](#technical-requirements)
  - [Documentation](#documentation)
  - [Judging Criteria](#judging-criteria)
  - [Bonus](#bonus)
- [Contributors](#-contributors)

## Features

- The application is built using ReactJS.
- The application is hosted on <strong>Cloudflare Pages</strong>.
- Supports syntax highlighting for SQL queries.
- Supports autocomplete for SQL keywords.
- Supports bracket matching, and auto-closing of brackets.
- User can Run, Save, Clear queries from the editor
- User can search for all available queries and query history
- User can download the query output as a CSV file

## Tech Stack

- ReactJS
- React Router
- React CSV
- Codemirror
- FontAwesome

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

## Dependencies

Editor:

- `@uiw/react-codemirror`: ^4.21.21
- `@uiw/codemirror-theme-xcode`: ^4.21.21
- `@codemirror/lang-sql`: ^6.5.4

Icon Pack:

- `@fortawesome/react-fontawesome`: ^0.2.0
- `@fortawesome/fontawesome-svg-core`: ^6.5.1
- `@fortawesome/free-regular-svg-icons`: ^6.5.1
- `@fortawesome/free-solid-svg-icons`: ^6.5.1

React:

- `react`: ^18.2.0
- `react-csv`: ^2.2.2
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.20.1

## Data

The data used in the application is downloaded from [mockaroo.com](https://www.mockaroo.com/). Mockaroo is a free test data generator website. It is used to generate realistic test data. The data is stored locally, in a JSON object in the `assets` folder, in a file named `Data.js`.

## Page Speed and Load Time

To evaluate the performance of this web application, I utilized Google Lighthouse, a comprehensive tool for auditing the quality of web pages. This tool was instrumental in providing insights into the page speed and load times of this application.
The analysis included measurements of key performance indicators such as

- First Contentful Paint,
- Largest Contentful Paint,
- Total Blocking Time,
- Cumulative Layout Shift, and
- Speed Index.

For page loading time of this application, I have used the `First Contentful Paint (FCP)` and `Largest Contentful Paint (LCP)` metrics. These two are the most directly relevant to how quickly the page's content becomes visible to the user, which is what most people consider as "loading time".

The results of the analysis are as follows:

- Homepage load time and performance <strong>`FCP: 0.6s`, `LCP: 0.6s`</strong>:
  <img width="720" alt="HomePage.jpg" src="https://github.com/amaan14999/atlan-sql-editor/assets/73187712/db65ad8d-07db-401b-9eab-88b0a70925a9">
- Editor page load time and performance <strong>`FCP: 0.6s`, `LCP: 0.6s`</strong>:
  <img width="720" alt="EditorPage.jpg" src="https://github.com/amaan14999/atlan-sql-editor/assets/73187712/212c1cfb-1c42-41d2-8125-904a4771367d">


## 👨‍💻 Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/amaan14999"><img src="https://avatars.githubusercontent.com/u/73187712?v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Amaan</b></sub></a><br /></td>  
  </tr>
</table>
