window.onload = function () {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name')
    const citizen = document.getElementById('citizen')
    const security = document.getElementById('security')
    const state = document.getElementById('state')
    let senior
    if (document.getElementById('seniorYes').checked) {
      senior = 'Yes'
    } else {
      senior = 'No'
    }

    const res = 'Citizen ID: ' + citizen.value + '\n'
        + 'SSN: ' + security.value + '\n'
        + 'Full Name: ' + name.value + '\n'
        + 'State: ' + state.value + '\n'
        + 'Senior: ' + senior;

    alert(res);
  })
}
