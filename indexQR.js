import qr from 'qr-image';
import  fs from "fs";
import inquirer from 'inquirer';
inquirer
  .prompt([
    {
        message:"Enter the our URL: ",
        name:"URL",
    }
  ])
  .then((answers) => {
    var url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img1.png"));
    fs.appendFile("URL.txt",url,function(err){
      if(err) throw err;
      console.log("URL Saved Successfully");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });