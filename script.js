const container = document.getElementById('container');
function loadHtml(data) {
    data.forEach((datum) => {
        var link = document.createTextNode(`Checkout ${datum}`);
        let anchor = document.createElement('a');
        anchor.appendChild(link); 
        anchor.href=`./${datum}/index.html`;
        let el = document.createElement('div');
        el.className="apps";
        el.appendChild(anchor);
        container.appendChild(el);
        // container.appendChild(anchor)
    })


}

fetch('files.json')
.then((response) => {
    return response.json();
  })
  .then((data) => {
    loadHtml(data);
  });