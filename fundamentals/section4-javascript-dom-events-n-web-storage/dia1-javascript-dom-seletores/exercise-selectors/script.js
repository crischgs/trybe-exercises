document.getElementsByTagName('header')[0].style = 'background-color: #00b069;';

document.getElementsByClassName('emergency-tasks')[0].style = 'background-color: #ff9f84;';

const emergencyTasksTitle = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksTitle.length; index += 1) {
    emergencyTasksTitle[index].style = 'background-color: #a500f3;';
}

document.getElementsByClassName('no-emergency-tasks')[0].style = 'background-color: #f9db5e;';

const noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksTitle.length; index += 1) {
    noEmergencyTasksTitle[index].style = 'background-color: #232525;';
}

document.getElementById('footer-container').style = 'background-color:#003533;';