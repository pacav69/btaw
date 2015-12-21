#Bootstrap Template Another Way - BTAW
[![spc logo](https://cldup.com/I-R7eDB7Q0.png)](http://www,silverpcgroup.com "silverpcgroup")


[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
![](https://travis-ci.org/pacav69/btaw.svg?branch=master)

This setup is based on Modern Business template from Start Bootstrap using the following:

- Grunt
- Bower components
- Assemble
- handlebars
- less
- concat
- uglify
- fontawesome

With this configuration it provides a scaffold structure that can be simply combined to form a single web-page or a multi-page website.

## Web page structure
A website page consists of four main areas:

### The header
This is where the doctype, meta data and css files are located which is common to all pages.

### The navigation
The navigation menu is common to all pages and can be easily changed to suit requirements.

### The body
The main content which will be different on each page.

### The footer
Contains the copyright information and the JavaScript links.

With assemble the four main areas of the website page can be combined together to form a single page that can used in conjunction with other pages to form a complete website.
With blocks of code located in the partials folder web pages can be put together as required and features added such as the modal popup.

### Using bower components
In the src/tasks/concat.js file
the bower files are concatenated together into 'dist/assets/js/core.js'
which is referenced in /src/templates/partials/b-footer.hbs file so that it is common to all pages.
Any additional javascript files are added by modifying concat.js file.

## Grunt tasks
These are in the directory 'src/tasks/' and called from the gruntfile.js located in the root directory.

## Installation

### Requirements
Have nodejs and grunt-cli

For files 

	git clone https://github.com/pacav69/btaw.git

After downloading the files from github run the following:

	npm install
	bower install

## Usage

	grunt
will run the default tasks


	grunt serve

will run local server and monitor/watch any configured file changes and carry out the associated tasks and refresh the browser.

    grunt assemble

will run assemble on parts of the webpages 

## Customizing

### main.css
The main.css is created with a combination of less files 

The custom.less file '/src/assets/less/main/layout/custom.less'
imports colors from the palette.less '/src/assets/less/main/layout/palette.less' this will override the default color scheme.

To visually see the palette first goto [paletton](http://paletton.com) and choose the desired color scheme, then select 'tables/export' button from there select the 'color list as less' option  it will open up a page with the Palette color codes just highlight and copy the text then paste into palette.less file and save.

### Table Of Contents (TOC)

in the pages that are required in the table of contents this data is in each of the pages

    ---
    title: Toc-Page1
    icon: fa fa-clock-o
    sortOrder: 0
    styleName: default
    topTitle: Docs
    ---

Breakdown of each of the parts

- title: Toc-Page1 This is the title that will appear in the TOC list
- icon: fa fa-clock-o This is the icon that will appear in the TOC list next to the title
- sortOrder: 0 This is the sort order of each page in the TOC, it should be a  unique number
- styleName: default This is the style used
- topTitle: Docs This is the topictitle that will be used by the tocbs file


In the tocbs.hbs file

    {{! find each file from pages collection where data.topTitle matches Docs, then sort in order according to the data.sortOrder parameter and add an icon according to the data.icon contained in each of the hbs files }}
    <!-- .tochbs -->
    {{#withSort pages "data.sortOrder"}}
    {{#is data.topTitle "Docs"}}
    <li  {{#is ../../page.dest this.dest}} class="active"{{/is}}>
    <a href="{{relative ../../page.dest this.dest}}"><span class="{{data.icon}}">&nbsp;{{data.title}}</a>
    </li>
    {{/is}}
    {{/withSort}}
    <!-- ./tochbs -->

this file will go through each of the pages to select files that meet the criteria of 'data.topTitle "Docs"' then sort according to the sortorder and add the icon and title.

In the navbar add the following:

    <li>
      {{> tocbs}}
    </li>
    
### Directory structure of src


	src
	│───│
    │   ├───assets
    │   ├───css
    │   ├───fonts
    │   ├───img
    │   ├───js
    │   │   └───core
    │   └───less
    │   ├───error
    │   └───main
    │   └───layout
    ├───data
    ├───helper
    ├───mddocs
    ├───tasks
    ├───templates
    │   ├───custom-helpers
    │   ├───layouts
    │   ├───pages
    │   └───partials
    │   └───snippets
    │   └───lorem-ipsum
    └───_appref
    ├───bin
    ├───css
    ├───font-awesome
    │   ├───css
    │   ├───fonts
    │   ├───less
    │   └───scss
    ├───fonts
    ├───images
    └───js

## References

http://placehold.it

[Font-Awesome cheatsheet](http://fortawesome.github.io/Font-Awesome/cheatsheet/ "Font-Awesome cheatsheet")


[Start Bootstrap](http://startbootstrap.com/) - [Modern Business](http://startbootstrap.com/template-overviews/modern-business/)