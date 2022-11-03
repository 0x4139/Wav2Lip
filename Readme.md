[![npm version](https://badge.fury.io/js/wav2lip.svg)](https://badge.fury.io/js/wav2lip)

# Wav2Lip

> Wav2Lip is an npm library over a docker image that contains the [Wav2Lip](https://github.com/Rudrabha/Wav2Lip) python package

# Models 

> Face detection [pre-trained model](https://www.adrianbulat.com/downloads/python-fan/s3fd-619a316812.pth) should be downloaded to `models/s3fd.pth`. Alternative [link](https://iiitaphyd-my.sharepoint.com/:u:/g/personal/prajwal_k_research_iiit_ac_in/EZsy6qWuivtDnANIG73iHjIBjMSoojcIV0NULXV-yiuiIg?e=qTasa8) if the above does not work.

> Wav2Lip [pre-trained model](https://iiitaphyd-my.sharepoint.com/:u:/g/personal/radrabha_m_research_iiit_ac_in/Eb3LEzbfuKlJiR600lQWRxgBIY27JZg80f7V9jtMfbNDaQ?e=TBFBVW) ) should be downloaded to `models/wav2lip.pth`.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
8.19.2
v18.12.0
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Javascript](#javascript-example)
    - [Docker](#docker-example)
    - [Results](#example-results)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/0x4139/Wav2Lip.git
$ cd PROJECT
```

To install and set up the library, run:

```sh
$ npm install -S wav2lip
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev wav2lip
```

## Usage


### Javascript Example


```js
const Wav2Lip = require("../index")

let instance=new Wav2Lip({
    inputDir:`${__dirname}`,
    outputDir:`${__dirname}`
   });

(async function() {
  try{
    const result = await instance.Run("game.mp4","game.wav")
    console.log(result)
  }catch(err){
    console.log(err)
  }
})();
```

### Javascript Example

```bash
git clone https://github.com/0x4139/Wav2Lip
cd Wav2Lip
docker run -v "$(pwd)"/example:/data -v "$(pwd)"/result:/usr/wav2lip/results 0x4139/wav2lip:v1 python inference.py --checkpoint_path checkpoints/wav2lip.pth --face /data/game.mp4 --audio /data/game.wav
```

### Example Results

Results are stored in the chosen mount folder in this case `example`


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

Original Wav2Lip work : radrabha.m@research.iiit.ac.in
## Built With

* Docker
* Node.JS

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/0x4139/Wav2Lip/tags).

## Authors

* **Vali Malinoiu** - *Initial work* - [0x4139](https://github.com/0x4139)

See also the list of [contributors](https://github.com/0x4139/Wav2Lip/contributors) who participated in this project.

## License

[MIT License](https://0x4139.mit-license.org/2019) © Vali Malinoiu