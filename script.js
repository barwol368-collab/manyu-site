document.addEventListener('DOMContentLoaded', function () {
  var copyBtn = document.getElementById('copyBtn');
  var contractValue = document.getElementById('contractValue');
  if (!copyBtn || !contractValue) return;

  copyBtn.addEventListener('click', function () {
    var text = contractValue.textContent.trim();
    navigator.clipboard.writeText(text).then(function(){
      copyBtn.textContent = 'Skopiowano!';
      setTimeout(function(){ copyBtn.textContent = 'Kopiuj'; }, 1600);
    }).catch(function(){
      // Fallback for older browsers
      var textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(textarea);
      copyBtn.textContent = 'Skopiowano!';
      setTimeout(function(){ copyBtn.textContent = 'Kopiuj'; }, 1600);
    });
  });
});



