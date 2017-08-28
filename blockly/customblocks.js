Blockly.Blocks['semaforo'] = {
  init: function() {
    this.appendStatementInput("Left")
        .setCheck(null)
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["ROJO","R"], ["AMARILLO","A"], ["VERDE","V"]]), "Colores")
        .appendField(new Blockly.FieldDropdown([["prender","prender"], ["apagar","apagar"]]), "Switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//Generator Stub

Blockly.JavaScript['semaforo'] = function(block) {
  var colores = block.getFieldValue('Colores');
  var dropdown_switch = block.getFieldValue('Switch');
  var statements_left = Blockly.JavaScript.statementToCode(block, 'Left');
  if(dropdown_switch == "prender"){
    document.getElementById('circle').style.backgroundColor='red';  
  }
  if(dropdown_switch == "apagar"){
    document.getElementById('circle').style.backgroundColor='white';  
  }
  return 1;
};
