var img = document.createElement("img");
img.src = "img/405-1400x800.jpg";
img.alt = img;
var src = document.getElementById("body");
src.appendChild(img);

const section_selector = document.querySelector("#images_list");

let results = [
    {
      id: "en-SK-C-5",
      title: "The Night watch"
    },
    {
      id: "en-SK-C-6",
      title: "The Sampling Officials"
    },
    {
      id: "en-SK-C-7",
      title: "The Apostle Paul",
    }
  ]
  
  function render_list() {
    const result_HTML = results.map((result) => {
      return `
      <div>
        <h3>${result.title}</h3>
      </div>`
    })
  
    section_selector.innerHTML = result_HTML.join("");
    
  }
  
   render_list()
  


