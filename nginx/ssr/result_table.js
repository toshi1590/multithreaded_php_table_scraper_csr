const result_table_section = document.getElementById('result_table_section');

function delete_tr_of_result_table(delete_btn){
  delete_tr(delete_btn);

  for (var i = 1; i < data.length; i++) {
    if (delete_btn.getAttribute('id') == data[i][0]) {
      data.splice(i, 1);
    }
  }
}

function display_result_table (data) {
  const table = get_table();
  table.setAttribute('id', 'result_table');
  table.querySelector('tbody').setAttribute('class', 'list');
  table.querySelector('tbody').setAttribute('id', 'tbody_of_result_table');
  result_table_section.appendChild(table);

  const value_names = [];

  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement('tr');

    if (i == 0) {
      for (let j = 0; j < data[i].length; j++) {
        const th = document.createElement('th');
        const text_node = document.createTextNode(data[0][j]);
        th.appendChild(text_node);
        tr.appendChild(th);
        value_names.push(data[0][j]);
      }

      const th_for_delete_btn = document.createElement('th');
      tr.appendChild(th_for_delete_btn);
      table.querySelector('thead').appendChild(tr);
    } else {
      for (let j = 0; j < data[i].length; j++) {
        const td = document.createElement('td');
        td.setAttribute('class', data[0][j]);
        const text_node = document.createTextNode(data[i][j]);
        td.appendChild(text_node);
        tr.appendChild(td);
      }

      const td = document.createElement('td');
      const delete_btn = get_btn('delete', 'btn btn-danger', i, 'delete_tr_of_result_table(this)');
      td.appendChild(delete_btn);
      tr.appendChild(td);
      table.querySelector('tbody').appendChild(tr);
    }
  }
}

display_result_table(data);

$(function() {
  $('#result_table #tbody_of_result_table').paginathing({
    perPage: 50,
    limitPagination: false,
    insertAfter: '#result_table',
    pageNumbers: true
  });
});