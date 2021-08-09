# A Quiz Game

Portfolio Project 2 JavaScript Essentials - Code Institute

## About

This Quiz game is designed to act as a randomised quiz for people who love easy levelled trivia. There was an uptake in quizzing at the beginning of the COVID-19 pandemic and these are the level of questions enjoyed in homes all over the country. 

# User Experience

## Strategy

Reasons a user may visit a site:

- A user wants to practise easy levelled trivia and test how many they get right

- A user may want to play the quiz game with a friend

Reasons for the site:

- Increase visitor numbers to Penshaw Monument by providing easy access to information in a minimalistic fashion

## Scope

A user can expect: 
    
  - A single paged site
  - Responsive design for screen sizes maintaining legibility of features
  - Randomised questions for a different order each visit
  - A scoreboard to keep track of the number of correct answers
  - A screen that tells them the correct answer if they got it wrong

## Structure

The website will consist of one page with distinct areas.

1. A hero image welcoming them to the site
2. An introduction to what the site is for
3. A question is asked
4. An answer box
5. A submit button
6. Upon triggering the submit button, the screen will be overlayed with a celebration or commiseration screen and a next button to return to the main screen for the next question
7. An area for keeping track of the score

## Surface

### Colours

![Color Palette]() 

- In the CSS 4 variable colours have been created: dark, pale, lightpink, brightpink.
- Dark, #300410 has been used rather than black for most of the site to aid user experience, especially for those who are low vision users. It is a colour picked out from the hero image in order to have a consistent theme. It is used either as text or a background colour for the best contrast. 
- Pale, #FFEBF1 has been used for text contrast on strong background colors for better contrast, limiting eye strain and allowing for a better user experience.
- Pale has also been used as a background for the main body of the site. This aids contrast with the dark text but also maintains a minimalistic site allowing the text information to be the main focus for the user. 
- Brightpink has been selected from the hero image using the colour picker tool. This has been used as an accent colour for buttons
- Lightpink has been selected from the hero image using the colour picker tool. This has been used as an accent colour for buttons.

The colour picker used was in chrome dev tools.

The colour palette image was produced using coolors.co.

### Typography

I have used https://fonts.google.com/ for my fonts. Using Bitter for the headings and Roboto for body text and sans-serif as back up. These are classic, easily legible fonts.
To achieve this I imported the following to the top of my style.css file.

    @import url('https://fonts.googleapis.com/css2?family=Bitter&family=Roboto&display=swap');

### Imagery
The hero image for this site was found from [pixabay](https://pixabay.com/illustrations/question-mark-question-why-5633947/) and is open access free for commercial use with no attribution required. It is of a question mark as that is a common association with quizzes: asking questions.

## Features

### Existing Features

### Features Left to Implement

## Testing

### Personal Testing

### Validator Testing

### Unfixed Bugs

# Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - Navigate down the sidebar to the Pages tab
  - From the Source section drop-down menu, select the Master Branch
  - Then press save, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://mmoore483.github.io/visit-penshaw-monument-p1/

When changes are made to the site using GitHub, the git push command will automatically update the deployed site.

## Forking

To trial changes to the site without affecting the original, the GitHub Repository can be forked.

- Log into GitHub and locate the desired repository
- In the top right, click the Fork button.

## Cloning

[Cloning](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) is useful for a multitude of reasons: to contribute to a project, to trial changes, to fix merge conflicts, add or remove files, and push larger commits.

- Log into your GitHub then find the gitpod repository
- Click the Code button
- If cloning with HTTPS click the clipboard icon to copy the link
- Open Gitbash
- Change the current working directory to the location where you want the cloned directory to be.
- Type git clone, and then paste the URL you copied earlier.
- Press enter to create your local clone

# Credits
-  
- Quiz questions from https://www.funquizzes.uk/easy-quiz-questions/
- Responsiveness tested using [whatismyscreenresolution](http://whatismyscreenresolution.net/multi-screen-test)
- Testing site for colour accessibility using Chrome extension [Let's get color blind](https://chrome.google.com/webstore/detail/lets-get-color-blind/bkdgdianpkfahpkmphgehigalpighjck/related?hl=en)
- coolors.co for creation of the colour palette image
- googlefonts for the imported fonts
- W3C HTML Validator for testing validity of HTML
- Jigsaw CSS Validator for testing validity of CSS
- JShint Validator for testing validity of JS
- Matt Rudge for the Code Institute Master Template
- Pixabay for [question mark image](https://pixabay.com/illustrations/question-mark-question-why-5633947/)
- Info on global variable creation for colours was from [W3Schools](https://www.w3schools.com/css/css3_variables.asp)
- The Coding Train [tutorial 1.1](https://www.youtube.com/watch?v=tc8DU14qX6I&t=0s&ab_channel=TheCodingTrain) and [tutorial 1.2](https://www.youtube.com/watch?v=RfMkdvN-23o&ab_channel=TheCodingTrain)
- The Code Institute [Love Maths Walkthrough](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) for logic behind random number generation and tracking scores

