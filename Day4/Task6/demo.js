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
        let button = document.createElement("button");
        button.innerText = "Download";
        button.setAttribute("id", "downloadBtn");
        // Add event listener directly to the button
        button.addEventListener("click", function () {
          const link = document.createElement("a");
          link.href = rows[i][j];
          link.download = `image${i + 1}.jpg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
        // button.addEventListener("click", async function () {
        //     try {
        //         const response = await fetch(rows[i][j], { mode: "cors" });
        //         const blob = await response.blob();
        //         const link = document.createElement("a");
        //         link.href = URL.createObjectURL(blob);
        //         link.download = `image${i + 1}.jpg`;
        //         document.body.appendChild(link);
        //         link.click();
        //         document.body.removeChild(link);
        //     } catch (error) {
        //         console.error("Failed to download image:", error);
        //     }
        // });
        {
          /* <a href="/images/myw3schoolsimage.jpg" download>
                    <input type="submit"src="/images/myw3schoolsimage.jpg" value="Download"  width="104" height="142">
                    </a>
                    <a href="path_to_file" download="proposed_file_name">Download</a> */
        }
        // let input = document.createElement('input')
        // input.setAttribute("type", "submit")
        // input.setAttribute("value", "Download")
        // input.setAttribute("src", rows[i][j])

        // //anchor tag
        // let a = document.createElement('a')
        // a.setAttribute("href", rows[i][j])
        // a.setAttribute("download", `image${i + 1}.jpg`)
        // a.appendChild(input)
        // console.log(a)

        //create columns
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.appendChild(img);
        td2.appendChild(button);

        tr.appendChild(td1);
        tr.appendChild(td2);
      }
      table.appendChild(tr);
    }
    CSV.style.display = "none";
  };

  reader.readAsText(file);
});
