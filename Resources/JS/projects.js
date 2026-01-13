async function Init() {
  const Projects = await fetch("../Resources/Infos/projects.json")
  const JsonObject = await Projects.json()


  for (const [Key, Value] of Object.entries(JsonObject)) {
    console.log(Value.Name);
    console.log(Value.Description);
    console.log(Value.Link);

    const Template = `
      <div class="Project">
        <hr>
        <h2>${Value.Name}</h2>
        <p>${Value.Description}</p>
        <a href="${Value.Link}">View</a>
      </div>
    `

    const Div = document.createElement("template")
    Div.innerHTML = Template.trim()

    const NewElement = Div.content.firstElementChild.cloneNode(true);

    document.getElementById("ProjectsHolder").appendChild(NewElement)
  }
}

Init()