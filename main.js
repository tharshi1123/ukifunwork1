SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/301161123',function(sound){
    $('#start-e1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
SC.stream('/tracks/175651162',function(sound){
    $('#start-e2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
 

  SC.stream('/tracks/310640631',function(sound){
    $('#start-e3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/229718889',function(sound){
      $('#start-h1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-h1').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/tracks/221570577',function(sound){
        $('#start-h2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-h2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/82840652',function(sound){
          $('#start-h3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-h3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/301161123',function(sound){
            $('#start-t1').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-t1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/215764028',function(sound){
              $('#start-t2').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-t2').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
	 
            SC.stream('/tracks/101867210',function(sound){
                $('#start-t3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-t3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
			  SC.stream('/tracks/271004119',function(sound){
                $('#start-s1').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-s1').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
			  SC.stream('/tracks/295928473',function(sound){
                $('#start-s2').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-s2').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
			  SC.stream('/tracks/327470399',function(sound){
                $('#start-s3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-s3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });




});
