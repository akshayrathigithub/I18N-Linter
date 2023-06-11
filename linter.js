const path = require("path");
const fs = require("fs");

function checkKeywords(code) {
  const currencies = ["INR", "Ruppees", "RM", "MYR"];
  const currencySymbols = ["₹", "\\$-*(?!{)"]
  const regionSpecificWords = ["RBI", "GST", "CIN"]
  const lines = code.split("\n");
  const errors = [];

  lines.forEach((line, i) => {
    const lineWithoutComments = line.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
    const words = lineWithoutComments.split(/\s+/);

    words.forEach((word) => {
      function hasMatch(pattern, type){
        const regex = new RegExp(pattern);
          const match = word.match(regex);
          if (match) {
            const msg = errorMsg(type, "hello");
            if (errors[errors.length - 1] !== msg) {
              errors.push(msg);
            }
          }
      }

      regionSpecificWords.forEach((keyword) => {
        hasMatch(`\\b${keyword}\\b`)
      });

      currencySymbols.forEach((symbol) => {
        hasMatch(`${symbol}`)
      });

      currencies.forEach((currency) => {
        hasMatch(`\\b${currency}\\b`)
      });
    });
  });

  return errors;
}

function validFile(pathName) {
  const supportedFileExtension = ["js", "jsx", "ts", "tsx", "html"];
  const excludeFolders = [".github", "__test__"];
  const fileExtension = getFileExtension(pathName);
  const isSupportedFielExtension = supportedFileExtension.find(
    (ext) => ext === fileExtension
  );
  let isExcludedFolder = false;

  for (const folder of excludeFolders) {
    if (pathName.includes(folder)) {
      isExcludedFolder = true;
      break;
    }
  }

  if (isSupportedFielExtension && !isExcludedFolder) {
    return true;
  }
  return false;
}

function getFileExtension(pathName) {
  return pathName.slice(((pathName.lastIndexOf(".") - 1) >>> 0) + 2);
}

function readFiles(dir, processFile) {
  // read directory
  fs.readdir(dir, (error, fileNames) => {
    if (error) throw error;

    fileNames.forEach((filename) => {
      // get current file name
      const name = path.parse(filename).name;
      // get current file extension
      const ext = path.parse(filename).ext;
      // get current file path
      const filepath = path.resolve(dir, filename);

      fs.readFile(filepath, "utf-8", function (err, content) {
        if (error) throw error;
        processFile(filename, content);
      });
    });
  });
}

function runLinter(folderName) {
  const FOLDER_PATH = {
    customFiles: "./files",
    rzpFiles: "./rzp",
  };
  const folderPath = FOLDER_PATH[folderName];
  readFiles(folderPath, (filename, content) => {
    console.log("file filename:", filename);

    const errors = checkKeywords(content);

    if (errors.length > 0) {
      errors.forEach((error) => console.error(error));
    } else {
      console.log("No keyword errors found.");
    }
  });
}

function validBranch(branchNane) {
  const excludedBranch = ["revert", "hotfix"];

  for (const branch of excludedBranch) {
    if (branchNane.includes(branch)) {
      return false;
    }
  }
  return true;
}

const branchNane = "tst_linter";
const fileNames = [
  "asld/alsdfa/testing.js",
  "asdf/werw/erte/fgd/component.jsx",
];
const isAllowedBranch = validBranch(branchNane);
if (isAllowedBranch) {
  for (const file of fileNames) {
    const isValidFile = validFile(file);
    if (isValidFile) {
      const textContent = " Hello Akshay ";
      checkKeywords(textContent);
    }
  }
}

function errorMsg(errorType, keyword) {
  const error_mapping = {
    currency:
      "Hard coded currency {} found, please use currency from User model file something like- props.user.merchant.currency",
    symbol:
      "Avoid hardcoding currency symbols instead import symbols from rzp-utils file",
    text: "Region specific keyword detected, please use genric term as we are also supporting multiple regions merchant who might be not aware of {} keyword",
  };
  if (error_mapping[errorType]) {
    return error_mapping[errorType].replace("{}", keyword);
  }
  return "Region specific text detected, please take approval from i18n team for this change";
}

// runLinter('rzpFiles')
// console.log(validFile("files/folder/Three.js"));
// .github/workflows/linter.yml README.md
