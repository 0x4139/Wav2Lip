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