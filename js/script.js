// Form triggers a toast and then resets
document.getElementById("form").addEventListener("submit", function(e){

  e.preventDefault()
  document.getElementById("form").reset()
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  });

 toastList.forEach(toast => toast.show()); 

});
