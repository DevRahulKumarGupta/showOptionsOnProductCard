import utils from '@bigcommerce/stencil-utils';

$(document).ready(function() {
    var $elements = $('.querryClass');
  
    $elements.each(function() {
      // ids.push();
      addItems($(this).data('product-swatches'))
    });
  });



function addItems(id){
  utils.api.product.getById(id, { template: 'products/swatches' }, (err, response) => {
    if(response){
      document.querySelector(`.product-${id}`).innerHTML=response;
    }else{
      console.log(err)
    }

  });
}

