// Script.js
let CSV = document.getElementById("csv");

CSV.addEventListener("change", (event) => {
  const file = event.target.files[0];
  
  const reader = new FileReader();

  reader.onload = (e) => {
    const content = e.target.result;
    const rows = content.split("\n").map((row) => row.split(","));
    const table = document.getElementById("table");
    table.innerHTML = "";

    for (let i = 0; i < rows.length; i++) {
      let tr = document.createElement("tr");
      for (let j = 0; j < rows[i].length; j++) {
        //image
        let img = document.createElement("img");
        img.setAttribute("src", rows[i][j]);
        //download button
        {
          /* <a href="https://wildernessmedicalstaffing.file.force.com/sfc/dist/version/download/?oid=00DHp00000F6yID&ids=068Hp00000mdHXp&d=%2Fa%2FHp000000pHQX%2FNXLRmAC0dYS9h3z0sgQEdrZlqwMEVRC0a3cCvwfstsE&asPdf=false" download="proposed_file_name.jpg">
        <button>Downlaod</button>
      </a>
                    <a href="path_to_file" download="proposed_file_name">Download</a> */
        }
         
            
        let input = document.createElement('button')
        
        input.innerText="Download"

        //anchor tag
        let a = document.createElement('a')
        a.setAttribute("href", rows[i][j])
        a.setAttribute("download", `image${i + 1}.jpg`)
        a.appendChild(input)
        // console.log(a)

        //create columns
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.appendChild(img);
        td2.appendChild(a);

        tr.appendChild(td1);
        tr.appendChild(td2);
      }
      table.appendChild(tr);
    }
    CSV.style.display = "none";
  };

  reader.readAsText(file);
});
