function money(n){return new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(n||0)}
function setResult(id, html){document.getElementById(id).innerHTML=html;document.getElementById(id).classList.add('show')}
