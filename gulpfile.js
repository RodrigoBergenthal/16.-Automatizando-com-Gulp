function funcaoPadrao(callback) {
  console.log("Executando via GULP");
  callback();
}

function dizoi (callback) {
  console.log("ola Gulp");
  callback();
  diztchau();
}

function diztchau (){
  console.log("Tchau gulp");
}


exports.default = funcaoPadrao;
exports.dizoi = dizoi;
