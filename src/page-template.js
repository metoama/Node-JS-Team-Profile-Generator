// create team 
const generateTeam = (team) => {
    console.log(team);

    const html = [];

    //manager html
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width 15rem;">
            <div class="card-header">
            ${manager.name} <br/>
            <i class="fas fa-mug-hot"></i>Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>`;
        html.push(managerHtml);
    } //engineer
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width 15rem;">
            <div class="card-header">
            ${engineer.name} <br/>
            <i class="fas fa-mug-hot"></i>Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>`;
        html.push(engineerHtml);
}
const generateIntern = intern => {
    console.log(intern);
    let internHtml = `
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width 15rem;">
        <div class="card-header">
        ${intern.name} <br/>
        <i class="fas fa-mug-hot"></i>Manager</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>`;
    html.push(internHtml)};

for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
        generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
        generateIntern(team[i]);
    };
}

return html.join('');
}

module.exports = team => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="../dist/style.css"/>  
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header span class="border border-5"></span>
        <h1>The Team</h1>
        </header>
    
        <main> ${generateTeam(team)}</main>
    </body>
    </html>;`
    
    
}