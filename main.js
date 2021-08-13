/* 
let parent = document.querySelector(".divv");
let child = parent.children;
let animDelay = 0.05;
for(let i = 0; i < child.length; i++) { 
    child[i].style.animationDelay = animDelay + 's';
    animDelay = animDelay + 0.01;
}; -->
<!-- .mast__title span:nth-child(22) */

$(document).ready(function(){
  
  var $randomnbr = $('.nbr');
  var $timer= 20;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = ["H", "A", "P", "P", "Y", "B", "I", "R", "T", "H", "D", "A", "Y"];
  
  $randomnbr.each(function(){
      
    change = Math.round(Math.random()*100);
    $(this).attr('data-change', change);
    
  });
  
  function random(){
    return Math.round(Math.random()*9);
  };
  
  function select(){
    return Math.round(Math.random()*$randomnbr.length+1);
  };
  
  function value(){
    $('.nbr:nth-child('+select()+')').html(''+random()+'');
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    $data++;
    
    $randomnbr.each(function(){
        if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
          index = $('.ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('nbr');
        }
    });
    
  };
  
  $it = setInterval(value, $timer);
    
});



//https://github.com/GeorgeHastings/emblem

var Emblem = {
  init: function(el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length)*(i);
      var x = (Math.PI/text.length).toFixed(0) * (i);
      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      element.appendChild(span);
    }
  }
};

Emblem.init('.emblem');


/* Поздравление */
function saveLocalStorage() {
    localStorage.setItem("name", $("#name").val());
    localStorage.setItem("email", $("#email").val());
    localStorage.setItem("message", $("#message").val());
    localStorage.setItem("policy", $("#policy").prop("checked"));
}

function loadLocalStorage() {
    if (localStorage.getItem("name") !== null) {
        $("#name").val(localStorage.getItem("name"));
    }
    if (localStorage.getItem("email") !== null) {
        $("#email").val(localStorage.getItem("email"));
    }
    if (localStorage.getItem("message") !== null) {
        $("#message").val(localStorage.getItem("message"));
    }
    if (localStorage.getItem("policy") !== null) {
        $("#policy").prop("checked", localStorage.getItem("policy") === "true");
        if ($("#policy").prop("checked")) {
            $("#sendButton").removeAttr("disabled");
        }
    }
}
function clear() {
    localStorage.clear();
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    $("#policy").val(false);
}




$(document).ready(function () {
    loadLocalStorage();
    $("#openButton").click(function () {
        $(".fixed-overlay").css("display", "flex");
        history.pushState(true, "", "./form");
      
       $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://formcarry.com/s/1jcJiVUhVF",
            data: $(this).serialize()
        });
    });
    $(".closeButton").click(function () {
        $(".fixed-overlay").css("display", "none");
        history.pushState(false, "", ".");
      
       
    });
    $("#form").submit(function (e) {
        e.preventDefault();
        $(".fixed-overlay").css("display", "none");
        // mhtkpoezczaccbtsnz@etochq.com
        // qwerty
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://formcarry.com/s/1jcJiVUhVF",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status === "success") {
                    alert("Ваше сообщение очень важно для нас");
                    clear();
                } else {
                    alert("Произошла ошибка: " + response.message);
                }
            }
        });
    });
    $("#policy").change(function () {
        if (this.checked) {
            $("#sendButton").removeAttr("disabled");
        } else {
            $("#sendButton").attr("disabled", "");
        }
    });
    $("#form").change(saveLocalStorage);

    window.onpopstate = function (event) {
        if (event.state) {
            $(".fixed-overlay").css("display", "flex");
        } else {
            $(".fixed-overlay").css("display", "none");
        }
    };
});

/* Стишочек */
/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);
/* Стишочек */

