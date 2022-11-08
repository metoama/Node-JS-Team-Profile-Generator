// create team 
const generateTeam = (team) => {
    console.log(team);

    const html = [];

    //manager html
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width 15rem;">
            <div class="card-header">
            ${manager.name} <br/>
            <i class="fas fa-mug-hot></i>Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>`
    }
};