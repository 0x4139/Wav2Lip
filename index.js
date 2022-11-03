var fs = require('fs')
const { exec } = require('child_process');
var crypto = require("crypto");


const WAV2LIP_IMAGE="0x4139/wav2lip:latest"

module.exports= class Wav2Lip {
    constructor(settings){

        if (!fs.existsSync(settings.inputDir) || !fs.existsSync(settings.outputDir)){
            throw `Input and Output directory must exist! ${settings.inputDir}`
        }
        this.settings=settings
    }
    async Run(faceFile, audioFile) {
        
        const outputFile=`${crypto.randomBytes(20).toString('hex')}.mp4`
        const faceStat=await fs.promises.lstat(`${this.settings.inputDir}/${faceFile}`)
        const audioStat=await fs.promises.lstat(`${this.settings.inputDir}/${audioFile}`)

        if (!faceStat.isFile() || !audioStat.isFile()){
            throw "Provided input is not a file!"
        }

        return new Promise((resolve,reject)=>{
            exec(`docker run -v ${this.settings.outputDir}:/usr/wav2lip/results -v ${this.settings.inputDir}:/data  ${WAV2LIP_IMAGE} python inference.py --checkpoint_path checkpoints/wav2lip.pth --face /data/${faceFile} --audio /data/${audioFile} --outfile results/${outputFile}`,(err,stdout,stderr)=>{
                if (err) {
                    reject({
                        err:err
                    })
                    return;
                  }
                  resolve({output:`${this.settings.outputDir}/${outputFile}`})

            })
        })

       

    }
}
