var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');

// show or hide
menuButton.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
});




<div class="agde">
<a href="https://www.centrenaturiste-oltra.fr/" class="aMr"><img src="image/agde.jpg"
        alt="Camping naturiste" class="oltra"></a>
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8189374130493!2d3.523356664744623!3d43.29711332913511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b13b16fbe5dd69%3A0x8b76570a185ba2be!2sCentre%20Naturiste%20Ren%C3%A9%20Oltra!5e0!3m2!1sfr!2sfr!4v1638969825563!5m2!1sfr!2sfr"
    width="300" height="300"></iframe>
<iframe id="widget_autocomplete_preview" width="150" height="300" frameborder="0"
    src="https://meteofrance.com/widget/prevision/340030"></iframe>
</div>