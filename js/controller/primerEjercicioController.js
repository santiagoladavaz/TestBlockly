var app = angular.module("primerEj", []); 
app.controller("primerEjercicioController", function($scope) {
    $scope.name = "santi";


     $scope.runCode = function (){
          alert("hola");  
          window.LoopTrap = 1000;
          Blockly.JavaScript.INFINITE_LOOP_TRAP = 
              'if(--window.LoopTrap == 0) throw "Inifinite Loop";\n';
          var code = Blockly.JavaScript.workspaceToCode(workspace);
          Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
          try{
            eval(code);
          }catch(e){
            alert(e);
          }
        }
  
   /* $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }*/ 
});