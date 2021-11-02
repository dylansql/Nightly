# Nightly

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

Nightly is a blog site that allows users to find resources to help them sleep. Ranging from Bedtime stories to literal step by step instructions, Nightly is the one stop shop until your ready to take on the next day.


<br>

## MVP

The Nightly MVP will consist of 5 main features, a RESTful JSON API, Interactive Front End, 8 separate components in the front end, and full Crud. 

<br>

### Goals

- CRUD functionality
- Complete by Deadline
- Deliverable withh ruby back end
- React Front end
- Accomplish one or two post MVP

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-End Framework|
|   React Router   | Routing between application |
| Ruby on Rails | Backend Framework |
| Vanilla CSS | Front End Styling |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Desktop](https://res.cloudinary.com/ddid7dngp/image/upload/v1635829001/Screen_Shot_2021-11-01_at_9.56.27_PM_sobibc.png)

- Desktop Landing

![Dummy Link](https://res.cloudinary.com/ddid7dngp/image/upload/v1635829036/Screen_Shot_2021-11-01_at_9.57.02_PM_fpbnxh.png)

- Desktop Listings

![Dummy Link](https://res.cloudinary.com/ddid7dngp/image/upload/v1635863560/Screen_Shot_2021-11-02_at_7.32.20_AM_psvibw.png)

- Desktop Detail

![Dummy Link](https://res.cloudinary.com/ddid7dngp/image/upload/v1635863642/Screen_Shot_2021-11-02_at_7.33.40_AM_izd9z6.png)

- Desktop Create

#### Component Tree

[Component Tree Sample](https://res.cloudinary.com/ddid7dngp/image/upload/v1635863340/Screen_Shot_2021-11-02_at_7.28.14_AM_nbajt7.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
      |__ avatars
|__ components/
      |__ Header.jsx
      |__ Layout  
|__ services/
      |__ auth
      |__ api.config
      |__ Posts
|__ screens/
      |__ Login
      |__ Landing
      |__ Listing
      |__ PostEdit
      |__ PostDetail
      |__ Signup
```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Ruby/Rails Backend Creation    |    H     |     3 hrs      |     0 hrs     |    TBD    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Front End Development |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Styling  |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Post MVP |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Revisions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![Model](https://res.cloudinary.com/ddid7dngp/image/upload/v1635881278/Screen_Shot_2021-11-02_at_12.27.01_PM_atvezb.png)

<br>

***

## Post-MVP

- High Quality Animations
- Incorporating roles (User Auth) 
- Comments and Subcomments
- More Sleek Design
- Api thhat provides meditative stories
- Night Mode Switch on screen

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
