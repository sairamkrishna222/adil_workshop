function createProductCodeForm(parent) {
    var form = $("<form/>");
    var input = $("<input>")
                  .attr('name', 'productCode')
                  .attr('type', 'text');
  
    var label = $("<label>")
                  .attr('name', 'hint')
                  .text('The product code can be found on the label.')
                  .hide();
  
    form.append($("<label>").text('Product Code:'));
    form.append(input);
    form.append(label);
   
    input.focus(label.show.bind(label));
    input.blur(label.hide.bind(label));
    
    form.append('<br>');
    form.append($("<input>").attr('type', 'submit'));
    parent.append(form);
  }
  
  createProductCodeForm($('#formContainer'))