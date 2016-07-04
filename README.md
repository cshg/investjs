#InvestJS
Personal portfolio management tool to visualize and monitor different investment strategies

## Table of Contents
1. [Getting started](#getting-started)
2. [Tech](#tech)
3. [Directory Layout](#directory-layout)
4. [Contributing](#contributing)

## Getting started

Clone and install dependencies:
```sh
$ https://github.com/cshg/investjs.git
$ cd investjs
$ npm install
```

```sh
$ npm start
```

## Tech
 - AngularJS
 - Angular ui-router
 - Chartjs
 - nodemailer
 - Node
 - Express

## Directory Layout
```
├── /node_modules/              # 3rd-party libraries and utilities
├── /client/                    # Client React-Redux Entry Points
├── /server/                    # Server source
│   └── portfolioController.js  # Express application entry point
│   └── portfolioModel.js       # Express application entry point
│   └── requestHandler.js       # Express application entry point
│   └── server.js               # Express application entry point
└── package.json                # npm dependencies, scripts, and package info
```

## Contributing

1. Fork the repo.
2. Clone it to your local computer
3. Cut a namespaced feature branch from master and name it appropriately
4. Make commits and prefix each commit with the type of work you were doing
5. BEFORE PUSHING UP YOUR CHANGES, rebase upstream changes into your branch, fix any potential conflicts, and then push to your fork.
6. Submit a pull request directly to the master
7. Someone else will perform code review to keep codebase cleanFix any errors or issues raised by the reviewer and push 4he fixes as a single new commit
Repeat until the pull request is merged.

