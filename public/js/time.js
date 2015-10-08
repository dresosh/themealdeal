 var ajax = $.get('https://api.doughnuts.ga/doughnuts')
    .done(function(data){
      console.log(data);
    });