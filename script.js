// Obtén todos los elementos elemento cuyo atributo 'id' comience con "item_"
const elementos = document.querySelectorAll('span');

// Itera sobre los elementos y agrega un manejador de eventos click a cada uno
elementos.forEach(function(elemento) {
  elemento.addEventListener('click', function() {

   alert(elemento.id);
    
    if(!elemento.classList.contains('new_class')){
        elemento.classList.add('new_class');
    }else{
        elemento.classList.remove('new_class');
    }

  });

});