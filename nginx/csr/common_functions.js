function get_btn (textnode, class_, id, function_) {
  const btn = document.createElement('button');
  const text_node = document.createTextNode(textnode);
  btn.appendChild(text_node);
  btn.setAttribute('type', 'button');
  btn.setAttribute('class', class_);
  btn.setAttribute('id', id);
  btn.setAttribute('onclick', function_);
  return btn;
}

function get_input (type, class_, name, placeholder) {
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('class', class_);
  input.setAttribute('name', name);
  input.setAttribute('placeholder', placeholder);
  return input;
}

function get_label (textnode, class_) {
  const label = document.createElement('label');
  const text_node = document.createTextNode(textnode);
  label.appendChild(text_node);
  label.setAttribute('class', class_);
  return label;
}

function get_tds (elements) {
  const tds = [];

  for (let i = 0; i < elements.length; i++) {
    const td = document.createElement('td');
    td.appendChild(elements[i]);
    tds.push(td);
  }

  return tds;
}

function get_ths (elements) {
  const ths = [];

  for (let i = 0; i < elements.length; i++) {
    const th = document.createElement('th');
    th.appendChild(elements[i]);
    ths.push(th);
  }

  return ths;
}

function get_tr (tds_or_ths) {
  const tr = document.createElement('tr');

  for (let i = 0; i < tds_or_ths.length; i++) {
    tr.appendChild(tds_or_ths[i]);
  }

  return tr;
}

function add_tr_in_thead (elements, thead) {
  const ths = get_ths(elements);
  const tr = get_tr(ths);
  thead.appendChild(tr);
}

function add_tr_in_tbody (elements, tbody) {
  const tds = get_tds(elements);
  const tr = get_tr(tds);
  tbody.appendChild(tr);
}

function get_table(){
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  table.setAttribute('class', 'table');
  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

function delete_tr (delete_btn) {
  delete_btn.closest('tr').remove();
}

function delete_table (delete_btn) {
  delete_btn.closest('table').remove();
}
