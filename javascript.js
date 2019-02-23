document.addEventListener("DOMContentLoaded", function() {
    particlesJS('particles-js', {
"particles": {
"number": {
  "value": 40,
  "density": {
    "enable": true,
    "value_area": 1000
  }
},
"color": {
  "value": "#ffffff"
},
"shape": {
  "type": "circle",
  "stroke": {
    "width": 0,
    "color": "#000000"
  },
  "polygon": {
    "nb_sides": 5
  }
},
"opacity": {
  "value": 0.5,
  "random": false,
  "anim": {
    "enable": false,
    "speed": 1,
    "opacity_min": 0.1,
    "sync": false
  }
},
"size": {
  "value": 5,
  "random": true,
  "anim": {
    "enable": false,
    "speed": 25,
    "size_min": 0.1,
    "sync": false
  }
},
"line_linked": {
  "enable": true,
  "distance": 70,
  "color": "#ffffff",
  "opacity": 0.4,
  "width": 2
},
"move": {
  "enable": true,
  "speed": 12,
  "direction": "none",
  "random": false,
  "straight": false,
  "out_mode": "out",
  "bounce": false,
  "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 1200
  }
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
  "onhover": {
    "enable": true,
    "mode": "grab"
  },
  "onclick": {
    "enable": false,
    "mode": "push"
  },
  "resize": true
},
"modes": {
  "grab": {
    "distance": 140,
    "line_linked": {
      "opacity": 1
    }
  },
  "bubble": {
    "distance": 800,
    "size": 80,
    "duration": 2,
    "opacity": 0.8,
    "speed": 3
  },
  "repulse": {
    "distance": 400,
    "duration": 0.4
  },
  "push": {
    "particles_nb": 4
  },
  "remove": {
    "particles_nb": 2
  }
}
},
"retina_detect": true
}, function() {
console.log('callback - particles.js config loaded');
});
    });

var $window = $(window);

$(function() {
	$window.on("scroll", function() {
    if($window.scrollTop() >= 100) {
      $("#nav-bar").attr("class","nav-bar-scroll");
      $(".item-menu").attr("class","item-menu-scroll");
      $(".logo").attr("src", "logo-site-roxo.svg"); 
      $(".imgmenu").attr("src", "menu-scroll.svg");
    } else {
      $("#nav-bar").attr("class","");
      $(".item-menu-scroll").attr("class","item-menu");
      $(".logo").attr("src", "logo-site-branco.svg");
      $(".imgmenu").attr("src", "menu.svg");
    }
		 	
	if($window.scrollTop() >= 400) {
		$(".titulo-sessao").css({
			"opacity": "1"
		})
	} else {
		$(".titulo-sessao").css({
			"opacity": "0"
		})
  }

  if($window.scrollTop() >= 500) {
    $(".conteudo-sobre").css({
      "opacity": "1"
    })
  } else {
    $(".conteudo-sobre").css({
      "opacity": "0"
    })
  }

if($window.scrollTop() >= 500) {
    $(".calltoaction2").css({
      "opacity": "1"
    })
  } else {
    $(".calltoaction2").css({
      "opacity": "0"
    })
  }
  });
});

var sobre = $("#sobre");
var toposobre = sobre.offset();

$(document).ready(function($) {
  $(".item-menu, .item-menu-lateral, .item-menu-scroll, .linklogo, .calltoaction").click(function(event){
   event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top - 70}, 1000);
  });
 });

function abrir() {
	document.getElementById("lateral").style.right = "0px";
}
 function fechar() {
	document.getElementById("lateral").style.right = "-800px";
}

