var list = document.querySelectorAll('.m-list')

for (let i = 0; i < list.length; i++) {
  list[i].onclick = () => {
    window.location.href = 'list2.html'
  }
}