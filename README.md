[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

![Maintained][maintained-badge]
[![Travis Build Status][build-badge]][build]
[![Make a pull request][prs-badge]][prs]
[![License](http://img.shields.io/badge/Licence-MIT-brightgreen.svg)](LICENSE.md)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# Introduction

Bootstrap and package your project with Angular 9 and Electron 8 (Typescript + SASS + Hot Reload) for creating Desktop applications.

Currently runs with:

- Angular v9.0.2
- Electron v8.0.1
- Electron Builder v22.3.2

With this sample, you can :

- Run your app in a local development environment with Electron & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac

/!\ Hot reload only pertains to the renderer process. The main electron process is not able to be hot reloaded, only restarted.

/!\ Angular 9.x CLI needs Node 10.13 or later to works correctly.


# SequenceOne
Transcriptional Factor consensus sequence tool interfacing JASPAR chip-seq data. This software is part of ongoing Ophthalmology Research with Schepens Eye Reserach Institute, Harvard Medical School, Mass General Hospital, Mass Eye and Ear, and support from Harvard John A. Paulson School of Engineering and Applied Sciences.

[![DOI](https://zenodo.org/badge/225500245.svg)](https://zenodo.org/badge/latestdoi/225500245)

## FIJI ImageJ
 <img src="https://imagej.net/_images/a/ae/Fiji-icon.png" alt="alt text" height="150px"> <br/>
 <img src="https://i.ytimg.com/vi/1Xd_sLPwPp8/maxresdefault.jpg" alt="alt text" width="50%"> <br/>

---
## Mitochondrial Morphology
 <div class="responsive-image">
  <picture style="padding-top: 40%">
    <img src="https://static4.olympus-lifescience.com/data/olympusmicro/galleries/confocal/cells/muntjac/images/muntjacexlarge2.jpg?rev=52EA" width="40%">
  </picture>
</div>

---
## Chromatin Immunoprecipitation (Chip-SEQ)
 <img src="https://www.researchgate.net/profile/John_Dahl/publication/5864276/figure/fig1/AS:280541862612992@1443897800286/The-chromatin-immunoprecipitation-ChIP-assay.png" alt="alt text" width="50%"> <br/>
 


## Getting Started

Clone this repository locally :

``` bash
git clone https://github.com/butcer0/SequenceOne-Client.git
```

Install dependencies with npm :

``` bash
npm install
```

There is an issue with `yarn` and `node_modules` when the application is built by the packager. Please use `npm` as dependencies manager.


If you want to generate Angular components with Angular-cli , you **MUST** install `@angular/cli` in npm global context.
Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

``` bash
npm install -g @angular/cli
```

## To build for development

- **in a terminal window** -> npm start

Voila! You can use your Angular + Electron app in a local development environment with hot reload !

The application code is managed by `main.ts`. In this sample, the app runs with a simple Angular App (http://localhost:4200) and an Electron window.
The Angular component contains an example of Electron and NodeJS native lib import.
You can disable "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

**Your application is optimised. Only /dist folder and node dependencies are included in the executable.**

## You want to use a specific lib (like rxjs) in electron main thread ?

YES! You can do it! Just by importing your library in npm dependencies section (not **devDependencies**) with `npm install --save`. It will be loaded by electron during build phase and added to your final package. Then use your library by importing it in `main.ts` file. Quite simple, isn't it ?

## Browser mode

Maybe you want to execute the application in the browser with hot reload ? Just run `npm run ng:serve:web`.
**Note that you can't use Electron or NodeJS native libraries in this case.** Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.

## Branch & Packages version

- Angular 4 & Electron 1 : Branch [angular4](https://github.com/butcer0/SequenceOne-Client/tree/angular4)
- Angular 5 & Electron 1 : Branch [angular5](https://github.com/butcer0/SequenceOne-Client/tree/angular5)
- Angular 6 & Electron 3 : Branch [angular6](https://github.com/butcer0/SequenceOne-Client/tree/angular6)
- Angular 7 & Electron 3 : Branch [angular7](https://github.com/butcer0/SequenceOne-Client/tree/angular7)
- Angular 8 & Electron 7 : Branch [angular7](https://github.com/butcer0/SequenceOne-Client/tree/angular8)
- Angular 9 & Electron 8 : (master)

[build-badge]: https://travis-ci.org/maximegris/SequenceOne-Client.svg?branch=master&style=style=flat-square
[build]: https://travis-ci.org/maximegris/SequenceOne-Client
[license-badge]: https://img.shields.io/badge/license-Apache2-blue.svg?style=style=flat-square
[license]: https://github.com/butcer0/SequenceOne-Client/blob/master/LICENSE.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/maximegris/SequenceOne-Client.svg?style=social
[github-watch]: https://github.com/butcer0/SequenceOne-Client/watchers
[github-star-badge]: https://img.shields.io/github/stars/maximegris/SequenceOne-Client.svg?style=social
[github-star]: https://github.com/butcer0/SequenceOne-Client/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20SequenceOne-Client!%20https://github.com/butcer0/SequenceOne-Client%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/butcer0/SequenceOne-Client.svg?style=social
[maintained-badge]: https://img.shields.io/badge/maintained-yes-brightgreen

---
## Affiliations and Acknowledgements
<p>
  <span>
  <div>
  </div>

  <img src="https://static.projects.iq.harvard.edu/files/styles/os_files_large/public/jurkunaslab/files/hms-dept-of-ophthalmology-header_1_0.png?m=1468002348&itok=LU1fMHSR" alt="alt text" width="40%" style="margin: 5px; padding: 15px"> 
  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Mass_Eye_and_Ear_logo.png/880px-Mass_Eye_and_Ear_logo.png" alt="alt text" height="80px" style="margin: 5px; padding: 15px">  <br/>
   <img src="https://png2.cleanpng.com/sh/019a8f8df7def541846e404582e9bb27/L0KzQYm3U8MxN5lAiZH0aYP2gLBuTfhieqdmitY2anBrfn7oTgBifZ14h9C2c3Prf7FzTf9nNZZzf9t3ZXX1ebBuTfFvbF54jOdteT24cbPsUsRiOWI3e6NsOT68SIe4WcU3P2I6SqQ9MUC5RYi3V8Y5NqFzf3==/kisspng-harvard-john-a-paulson-school-of-engineering-and-study-5abe24a112c1c9.9861956715224106570768.png" alt="alt text" height="100px" style="margin: 5px; padding: 20px">
  <img src="https://static.scholar.harvard.edu/files/styles/os_files_xxlarge/public/florianfintelmann/files/mgh_clear_background_large.png?m=1515673739&itok=UTssvlKV" alt="alt text" width="40%" style="margin: 5px; padding: 15px"> 
  </span>
 </p> 
 
  ---
  
The authors have no conflicts of interest or financial disclosures. Please contact research institute for up-to-date information of funding and supporting parties. Human ethics was approved by the Mass General Research Ethics Consultation Unit.


