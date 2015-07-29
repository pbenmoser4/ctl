# CloudMine Angular Web Application

This project is generated with the [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1 from the [yoeman team](http://yeoman.io/).

##Setting Up The Project

###Installing Prerequisites

To create this application, we've used a number of very popular and widely used third-party applications or modules. To view and work with the application appropriately, you will want to download them to your system as well. 

This part of the tutorial will make use of the command-line interface. Use your shell if you're using Linux; the Terminal application on Mac; or [`cmder`](http://gooseberrycreative.com/cmder/)(preferably), PowerShell, or cmd.exe on Windows.

####Node.js

Node JS is one of, if not the, most popular JavaScript applications. It's designed for, "easily building fast, scalable network applications." It's non-blocking I/O framework, and the fact that it is written in the extremely popular JavaScript, has made it a go-to for backend development. 

To check if you have Node installed already, run

	$ node --version

If you don't have node installed, you can download it from [their website](https://nodejs.org/download/). Download the installer _.pkg_ for Mac or _.msi_ for Windows and follow the install instructions.

####npm

npm is a JavaScript package manager. It simplifies the process of installing JavaScript packages and using them in your projects down to a one line script on your command-line. 

npm is bundled with Node.js, so you should have it if you downloaded Node, but feel free to check by running

	$ npm --version

If you don't have npm, return to the previous section and make sure that Node.js has been installed correctly.

Make sure npm is up to date by running

	$ npm install --global npm@latest

####git

Git is a distributed revision control system, originally developed by Linus Torvalds, famous for the development of the Linux kernel. It's used to store code and keep track of changes.

You can check if you have git installed by running

	$ git --version

If you're not familiar with git, or don't have it installed, check out the [git website](http://git-scm.com/) and download the installer using the link on the right side of the page.

Also, checkout [github](https://github.com/), the most popular interface for git repositories. Github is a great way to interface with git easily for your own projects, as well as find other projects that you can contribute to or learn from.

####Yoeman, Bower, and Grunt

Yoeman, Bower, and Grunt are three tools that were developed independently, but that work together beautifully to create great web apps.

You can check to see if you already have these tools installed by running

	$ yo --version && bower --version && grunt-cli --version

If you don't have some or all of them installed, you'll have to download them. Now that you have npm installed, you can download all three with one line:

	$ npm install --global yo bower grunt-cli
	
This should download and install Yoeman, Bower, and the Grunt Command Line Interface (cli). 
	
__ERRORS__

If you see any errors coming up with this, you can either use `sudo npm install` to do a root install, or you can checkout [this guide](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) which goes over how to avoid using root when doing global installs with npm.

## Build & development

Run `grunt` for building and `grunt serve` for preview.
