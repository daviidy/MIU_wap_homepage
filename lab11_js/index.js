'use strict'

$(document).ready(() => {
  $('form').on('submit', (e) => {
    e.preventDefault()
    const id = $('input[name=patientIdNumber]')
    const first = $('input[name=firstName]')
    const middle = $('input[name=middleInitials]')
    const last = $('input[name=lastName]')
    const date = $('input[name=dateOfBirth]')
    const dept = $('select[name=ddlDepartment]')
    // const outYes = $('#radioIsOutPatientYes')
    // const outNo = $('#radioIsOutPatientYes')
    const out = $('input[name="radioIsOutPatient"]:checked')

    const row = `<tr>
        <td>${id.val()}</td>
        <td>${first.val()}</td>
        <td>${middle.val()}</td>
        <td>${last.val()}</td>
        <td class="date">${date.val()}</td>
        <td>${dept.val()}</td>
        <td class="out">${out.val()}</td>
    </tr>`

    $('#tbodyPatientsList').append(row)
  })

  $('#chkElderlyPatients').on('change', () => {
    const tbody = document.getElementById('tbodyPatientsList')
    const tr = tbody.getElementsByTagName('tr')
    if ($('#chkElderlyPatients').is(':checked')) {
      const year = 1957
      for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByClassName('date')[0]
        if (parseInt(td.textContent.split('-')[0]) > year) {
          tr[i].style.display = 'none'
        }
      }
    } else {
      for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = ''
      }
    }
  })

  $('#chkShowOutPatients').on('change', () => {
    const tbody = document.getElementById('tbodyPatientsList')
    const tr = tbody.getElementsByTagName('tr')
    if ($('#chkShowOutPatients').is(':checked')) {
      const year = 1957
      for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByClassName('out')[0]
        if (td.textContent === 'No') {
          tr[i].style.display = 'none'
        }
      }
    } else {
      for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = ''
      }
    }
  })
})
