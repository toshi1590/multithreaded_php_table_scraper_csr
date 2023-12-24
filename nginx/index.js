// ajax_section
const title_of_ajax_section = document.getElementById('title_of_ajax_section');
const ajax_inputs = document.getElementById('ajax_inputs');

function create_ajax_inputs (use_btn) {
  use_btn.remove();
  const label_for_xpath_of_ajax_btn = get_label('xpath of button to switch tables', 'mb-1');
  const xpath_of_ajax_btn = get_input('text', 'form-control mb-1', 'xpath_of_ajax_btn', 'e.g. /html/body/div');
  const not_use_btn = get_btn('not use', 'btn btn-danger mb-1', '', 'delete_ajax_inputs()');
  const elements = [label_for_xpath_of_ajax_btn, xpath_of_ajax_btn, not_use_btn];

  for (let i = 0; i < elements.length; i++) {
    ajax_inputs.appendChild(elements[i])
  }
}

function delete_ajax_inputs () {
  ajax_inputs.innerHTML = '';
  const use_btn = get_btn('use', 'btn btn-primary mb-1', '', 'create_ajax_inputs(this)');
  title_of_ajax_section.appendChild(use_btn);
}


// column_numbers_to_scrape_section
const add_btn_for_column_numbers_to_scrape = document.getElementById('add_btn_for_column_numbers_to_scrape');
const table_for_column_numbers_to_scrape = document.getElementById('table_for_column_numbers_to_scrape');

add_btn_for_column_numbers_to_scrape.onclick = function () {
  const column_number_to_scrape = get_input('number', 'form-control', 'column_numbers_to_scrape[]', 'e.g. 1');
  column_number_to_scrape.setAttribute('min', '1');
  column_number_to_scrape.setAttribute('step', '1');
  const title = get_input('text', 'form-control', 'titles[]', 'e.g. price');
  const delete_btn = get_btn('delete', 'btn btn-danger', '', 'delete_tr(this)');
  const elements = [column_number_to_scrape, title, delete_btn];
  add_tr_in_tbody(elements, table_for_column_numbers_to_scrape.querySelector('tbody'));
}


// column_numbers_to_click_section
const column_numbers_to_click_section = document.getElementById('column_numbers_to_click_section');
const column_numbers_to_click_label = document.getElementById('column_numbers_to_click_label');

function add_3_tds (add_btn) {
  const element_1 = document.createTextNode('');
  const element_2 = document.createTextNode('');
  const element_3 = document.createTextNode('');
  const element_4 = get_input('text', 'form-control', 'titles[]', 'e.g. price');
  const element_5 = get_input('text', 'form-control', 'xpaths_to_scrape_in_a_new_page[]', 'e.g. /html/body/div');
  const element_6 = get_btn('delete', 'btn btn-danger', '', 'delete_tr(this)');
  const elements = [element_1, element_2, element_3, element_4, element_5, element_6];
  add_tr_in_tbody(elements, add_btn.closest('table').querySelector('tbody'));
}

function get_column_number_from_xpath (input_for_xpath_of_element_to_click_in_the_table) {
  const td_for_column_number_from_xpath = input_for_xpath_of_element_to_click_in_the_table.closest('td').nextElementSibling;
  const td_part_of_xpath = input_for_xpath_of_element_to_click_in_the_table.value.match(/td\[[0-9]+\]/); //match method returns array

  if (td_part_of_xpath !== null) {
    const column_number = td_part_of_xpath[0].match(/[0-9]+/);
    td_for_column_number_from_xpath.innerHTML = column_number[0];
  }else {
    td_for_column_number_from_xpath.innerHTML = '';
  }
}

function delete_column_numbers_to_click_table(delete_btn) {
  delete_btn.closest('table').remove();
  const column_numbers_to_click_label = document.getElementById('column_numbers_to_click_label');
  const add_btn = get_btn('add', 'btn btn-primary', '', 'create_column_numbers_to_click_table(this)')
  column_numbers_to_click_label.appendChild(add_btn);
}

let x = 0;

function create_column_numbers_to_click_table(add_btn) {
  const table = get_table();

  const element_for_th_1 = document.createTextNode('xpath of an element in a column to click');
  const element_for_th_2 = document.createTextNode('column number');
  const element_for_th_3 = document.createTextNode('');
  const element_for_th_4 = document.createTextNode('title');
  const element_for_th_5 = document.createTextNode('xpath of an element to scrape on derived pages');
  const element_for_th_6 = document.createTextNode('');
  const elements_for_ths = [element_for_th_1, element_for_th_2, element_for_th_3, element_for_th_4, element_for_th_5, element_for_th_6];
  add_tr_in_thead(elements_for_ths, table.querySelector('thead'));

  const element_for_td_1 = get_input('text', 'form-control', 'xpath_of_a', 'e.g. /html/body/div');
  element_for_td_1.setAttribute('onkeyup', 'get_column_number_from_xpath(this)');
  const element_for_td_2 = document.createTextNode('');
  x++;
  const element_for_td_3 = get_btn('add', 'btn btn-primary', x, 'add_3_tds(this)');
  const element_for_td_4 = get_input('text', 'form-control', 'titles[]', 'e.g. price');
  const element_for_td_5 = get_input('text', 'form-control', 'xpaths_to_scrape_in_a_new_page[]', 'e.g. /html/body/div');
  const element_for_td_6 = get_btn('delete', 'btn btn-danger', '', 'delete_column_numbers_to_click_table(this)');
  const elements_for_tds = [element_for_td_1, element_for_td_2, element_for_td_3, element_for_td_4, element_for_td_5, element_for_td_6];
  add_tr_in_tbody(elements_for_tds, table.querySelector('tbody'));

  column_numbers_to_click_section.appendChild(table);

  add_btn.remove();
}


// pagination_section
const title_of_pagination_section = document.getElementById('title_of_pagination_section');
const pagination_inputs = document.getElementById('pagination_inputs');

function create_pagination_inputs (use_btn) {
  use_btn.remove();

  const label_for_text_of_next_btn = get_label('text of next button', 'mb-1');
  const text_of_next_btn = get_input('text', 'form-control mb-1', 'text_of_next_btn', 'e.g. next');
  text_of_next_btn.setAttribute('value', '»');
  const label_for_pages = get_label('the number of pages', 'mb-1');
  const pages = get_input('number', 'form-control mb-1', 'pages', 'e.g. 1');
  pages.setAttribute('min', '2');
  pages.setAttribute('step', '1');
  const not_use_btn = get_btn('not use', 'btn btn-danger mb-1', '', 'delete_pagination_inputs()');
  const elements = [label_for_text_of_next_btn, text_of_next_btn, label_for_pages, pages, not_use_btn];

  for (let i = 0; i < elements.length; i++) {
    pagination_inputs.appendChild(elements[i])
  }
}

function delete_pagination_inputs () {
  pagination_inputs.innerHTML = '';
  const use_btn = get_btn('use', 'btn btn-primary mb-1', '', 'create_pagination_inputs(this)');
  title_of_pagination_section.appendChild(use_btn);
}


// start_scraping_btn
const scraping_form = document.getElementById('scraping_form');
let scraped_data;

$(function() {
  $('#start_scraping_btn').on('click', function(){
    // check if there is empty field in scraping_form
    const scraping_form_data = new FormData(scraping_form);
    let count = 0;

    scraping_form_data.forEach(function(value){
      if (value == '') {
        count++;
      }
    })

    // if there is not empty field, start scraping
    if (count !== 0) {
      alert('Please fill in ' + count + ' empty field(s) in scraping form.');
    } else {
      $('#result_table_section').html('');
      $('#chart_form').html('');
      $('#chart_section').html('');

      $.ajax({
        url: 'http://localhost:8002/scraping.php',
        type: 'POST',
        data: $('#scraping_form').serialize(),
        // Until request is completed
        beforeSend: function(){
          $('.loading').removeClass('hide');
        }
      }).done(function(data){
        $('.loading').addClass('hide');

        console.log(data);

        scraped_data = JSON.parse(data);
        display_result_table(scraped_data);

        // can update default setting in paginathing.js
        $('#result_table #tbody_of_result_table').paginathing({
          perPage: 50,
          limitPagination: false,
          insertAfter: '#result_table',
          pageNumbers: true
        });

        display_chart_form();

        result_table_section.scrollIntoView();
      }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        $('#result_table_section').html('failure');
      });
    }
  });
});


// result_table_section
const result_table_section = document.getElementById('result_table_section');

function delete_tr_for_result_table(delete_btn){
  delete_tr(delete_btn);

  for (var i = 1; i < scraped_data.length; i++) {
    if (delete_btn.getAttribute('id') == scraped_data[i][0]) {
      scraped_data.splice(i, 1);
    }
  }
}

function display_result_table (scraped_data) {
  const table = get_table();
  table.setAttribute('id', 'result_table');
  table.querySelector('tbody').setAttribute('class', 'list');
  table.querySelector('tbody').setAttribute('id', 'tbody_of_result_table');
  result_table_section.appendChild(table);

  const value_names = [];

  for (let i = 0; i < scraped_data.length; i++) {
    const tr = document.createElement('tr');

    if (i == 0) {
      for (let j = 0; j < scraped_data[i].length; j++) {
        const th = document.createElement('th');
        const text_node = document.createTextNode(scraped_data[0][j]);
        th.appendChild(text_node);
        tr.appendChild(th);
        value_names.push(scraped_data[0][j]);
      }

      const th_for_delete_btn = document.createElement('th');
      tr.appendChild(th_for_delete_btn);
      table.querySelector('thead').appendChild(tr);
    } else {
      for (let j = 0; j < scraped_data[i].length; j++) {
        const td = document.createElement('td');
        td.setAttribute('class', scraped_data[0][j]);
        const text_node = document.createTextNode(scraped_data[i][j]);
        td.appendChild(text_node);
        tr.appendChild(td);
      }

      const td = document.createElement('td');
      const delete_btn = get_btn('delete', 'btn btn-danger', i, 'delete_tr_for_result_table(this)');
      td.appendChild(delete_btn);
      tr.appendChild(td);
      table.querySelector('tbody').appendChild(tr);
    }
  }
}


//chart
const chart_form = document.getElementById('chart_form');
const chart_section = document.getElementById('chart_section');

function display_chart_form () {
  const form_check_1 = document.createElement('div');
  form_check_1.setAttribute('class', 'form-check');
  const group_by_a_column_radio = get_input('radio', 'form-check-input', 'condition', '');
  group_by_a_column_radio.setAttribute('onchange', 'append_titles_in_group_by_a_column_section()');
  group_by_a_column_radio.setAttribute('id', 'group_by_a_column_radio');
  const text_node_1 = document.createTextNode('group by a column');
  const group_by_a_column_section = document.createElement('div');
  group_by_a_column_section.setAttribute('id', 'group_by_a_column_section');
  form_check_1.appendChild(group_by_a_column_radio);
  form_check_1.appendChild(text_node_1);
  form_check_1.appendChild(group_by_a_column_section);
  chart_form.appendChild(form_check_1);

  const form_check_2 = document.createElement('div');
  form_check_2.setAttribute('class', 'form-check');
  const range_radio = get_input('radio', 'form-check-input', 'condition', '');
  range_radio.setAttribute('onchange', 'append_titles_in_range_section()');
  range_radio.setAttribute('id', 'range_radio');
  const text_node_2 = document.createTextNode('range');
  const range_section = document.createElement('div');
  range_section.setAttribute('id', 'range_section');
  form_check_2.appendChild(range_radio);
  form_check_2.appendChild(text_node_2);
  form_check_2.appendChild(range_section);
  chart_form.appendChild(form_check_2);

  const form_check_3 = document.createElement('div');
  form_check_3.setAttribute('class', 'form-check');
  const keyword_radio = get_input('radio', 'form-check-input', 'condition', '');
  keyword_radio.setAttribute('onchange', 'append_titles_in_keyword_section()');
  keyword_radio.setAttribute('id', 'keyword_radio');
  const text_node_3 = document.createTextNode('keyword');
  const keyword_section = document.createElement('div');
  keyword_section.setAttribute('id', 'keyword_section');
  form_check_3.appendChild(keyword_radio);
  form_check_3.appendChild(text_node_3);
  form_check_3.appendChild(keyword_section);
  chart_form.appendChild(form_check_3);

  const see_chart_btn = get_btn('see chart', 'btn btn-primary', 'see_chart_btn', 'judge()');
  chart_form.appendChild(see_chart_btn);
}


// title select
function append_titles(section) {
 const select = document.createElement('select');
 select.setAttribute('class', 'form-select mt-1 mb-1');
 select.setAttribute('name', 'title_number')

 for (let i = 1; i < scraped_data[0].length; i++) {
   const option = document.createElement('option');
   option.setAttribute('value', i);
   const option_text = document.createTextNode(scraped_data[0][i]);
   option.appendChild(option_text);
   select.appendChild(option);
 }

 section.appendChild(select);
}


//
function append_titles_in_group_by_a_column_section () {
 //
 range_section.innerHTML = '';
 keyword_section.innerHTML = '';

 //
 append_titles(group_by_a_column_section);
}


//
function append_titles_in_range_section () {
 //
 group_by_a_column_section.innerHTML = '';
 keyword_section.innerHTML = '';

 //
 append_titles(range_section);

 //
 const add_btn = get_btn('add', 'btn btn-primary mb-1', 'range_add_btn', 'add_range()');
 range_section.appendChild(add_btn);

 //
 const min = get_input('number', 'form-control', 'mins[]', 'min');
 const max = get_input('number', 'form-control', 'maxs[]', 'max');
 const delete_btn = get_btn('delete', 'btn btn-danger', '', 'delete_tr(this)');
 const table = get_table();
 range_section.appendChild(table);
 table.querySelector('tbody').setAttribute('id', 'tbody_of_range_table');
 const elements_for_tds = [min, max, delete_btn];
 add_tr_in_tbody(elements_for_tds, tbody_of_range_table);
}

function add_range () {
 const min = get_input('number', 'form-control', 'mins[]', 'min');
 const max = get_input('number', 'form-control', 'maxs[]', 'max');
 const delete_btn = get_btn('delete', 'btn btn-danger', '', 'delete_tr(this)');
 const elements_for_tds = [min, max, delete_btn];
 add_tr_in_tbody(elements_for_tds, tbody_of_range_table);
}


//
function append_titles_in_keyword_section () {
  //
  group_by_a_column_section.innerHTML = '';
  range_section.innerHTML = '';

  //
  append_titles(keyword_section);

  //
  const add_btn = get_btn('add', 'btn btn-primary mb-1', 'keyword_add_btn', 'add_keyword_input()');
  keyword_section.appendChild(add_btn);

  //
  const keyword_input = get_input('text', 'form-control', 'keywords[]', 'keyword');
  const delete_btn = get_btn('delete', 'btn btn-danger', '', 'delete_tr(this)');
  const table = get_table();
  keyword_section.appendChild(table);
  table.querySelector('tbody').setAttribute('id', 'tbody_of_keyword_table');
  const elements_for_tds = [keyword_input, delete_btn];
  add_tr_in_tbody(elements_for_tds, tbody_of_keyword_table);
}


function add_keyword_input () {
  const keyword_input = get_input('text', 'form-control', 'keywords[]', 'keyword');
  const delete_btn = get_btn('delete', 'btn btn-danger', '', 'delete_tr(this)');
  const elements_for_tds = [keyword_input, delete_btn];
  add_tr_in_tbody(elements_for_tds, tbody_of_keyword_table);
}


//
function judge () {
 const title_number = parseInt(document.querySelector('select[name="title_number"]').value);

 if (group_by_a_column_radio.checked) {
   const data_for_title_number = [];
   let total = 0;

   for (let i = 1; i < scraped_data.length; i++) {
     data_for_title_number.push(scraped_data[i][title_number]);
     total++;
   }

   // get distinct data
   let counted_data = {};

   for (let i = 0; i < data_for_title_number.length; i++) {
     var key = data_for_title_number[i];

     if (counted_data[key] == undefined) {
       counted_data[key] = 0;
     }

     counted_data[key]++;
   }

   //
   var array = Object.keys(counted_data).map((k)=>({ key: k, value: counted_data[k] }));

   array.sort((a, b) => b.value - a.value);

   counted_data = Object.assign({}, ...array.map((item) => ({
     [item.key]: item.value,
   })));

   // get labels from counted_data
   let labels = [];

   for (key in counted_data){
     const percentage = Math.round(((counted_data[key] / total) * 100) * 10) / 10;
     labels.push(key + " (" + percentage + "%)");
   }

   // get values from counted_data
   let values = [];

   for (key in counted_data){
     values.push(counted_data[key]);
   }

   display_chart(labels, values, title_number, total)
 } else if (range_radio.checked) {
   const mins = document.getElementsByName('mins[]');
   const maxs = document.getElementsByName('maxs[]');

   if (mins.length != 0 && maxs.length != 0) {
     let empty_check_flag;

     for (let i = 0; i < mins.length; i++) {
       if (mins[i].value == '' || maxs[i].value == '') {
         alert('fill in blanks');
         empty_check_flag = false;
         break;
       }

       empty_check_flag = true
     }

     if (empty_check_flag == true) {
       //
       let ranges = [];
       let range_groups = [];

       for (let i = 0; i < mins.length; i++) {
         ranges.push(mins[i].value + ' - ' + maxs[i].value);
         range_groups.push(new Array());
       }

       //
       let unsorted_data = [];
       let total = 0;

       for (let i = 1; i < scraped_data.length; i++) {
         unsorted_data.push(scraped_data[i]);
         total++;
       }

       //
       for (let i = 0; i < range_groups.length; i++) {
         for (let j = 0; j < unsorted_data.length; j++) {
           if (unsorted_data[j][title_number].match(/[0-9]+,[0-9]+/) != null) {
             if (unsorted_data[j][title_number].replace(/,/g, '') >= parseFloat(mins[i].value) && unsorted_data[j][title_number].replace(/,/g, '') <= parseFloat(maxs[i].value)) {
               range_groups[i].push(unsorted_data[j]);
               unsorted_data.splice(j, 1);
               j--;
             }
           } else {
             if (unsorted_data[j][title_number] >= parseFloat(mins[i].value) && unsorted_data[j][title_number] <= parseFloat(maxs[i].value)) {
               range_groups[i].push(unsorted_data[j]);
               unsorted_data.splice(j, 1);
               j--;
             }
           }
         }
       }

       if (unsorted_data.length != 0) {
         ranges.push('the other');
         range_groups.push(unsorted_data);
       }

       let labels = ranges;

       for (let i = 0; i < range_groups.length; i++) {
         const percentage = Math.round(((range_groups[i].length / total) * 100) * 10) / 10;
         labels[i] = labels[i].concat(" (" + percentage + "%)");
       }

       let values = [];

       range_groups.forEach(function(element){
         values.push(element.length);
       })

       display_chart(labels, values, title_number, total);
     }
   }
 } else if (keyword_radio.checked) {
   const keyword_inputs = document.getElementsByName('keywords[]');

   if (keyword_inputs.length != 0) {
     let empty_check_flag;

     for (let i = 0; i < keyword_inputs.length; i++) {
       if (keyword_inputs[i].value == '') {
         alert('fill in blanks');
         empty_check_flag = false;
         break;
       }

       empty_check_flag = true
     }

     if (empty_check_flag == true) {
       //
       let keywords = [];
       let keyword_groups = [];

       for (let i = 0; i < keyword_inputs.length; i++) {
         keywords.push(keyword_inputs[i].value);
         keyword_groups.push(new Array());
       }

       //
       let unsorted_data = [];
       let total = 0;

       for (let i = 1; i < scraped_data.length; i++) {
         unsorted_data.push(scraped_data[i]);
         total++;
       }

       //
       for (let i = 0; i < keyword_groups.length; i++) {
         for (let j = 0; j < unsorted_data.length; j++) {
           if (unsorted_data[j][title_number].includes(keywords[i])) {
             keyword_groups[i].push(unsorted_data[j]);
             unsorted_data.splice(j, 1);
             j--;
           }
         }
       }

       if (unsorted_data.length != 0) {
         keywords.push('the other');
         keyword_groups.push(unsorted_data);
       }

       //
       let labels = keywords;

       for (let i = 0; i < keyword_groups.length; i++) {
         const percentage = Math.round(((keyword_groups[i].length / total) * 100) * 10) / 10;
         labels[i] = labels[i].concat(" (" + percentage + "%)");
       }

       let values = [];

       keyword_groups.forEach(function(element){
         values.push(element.length);
       })

       display_chart(labels, values, title_number, total);
     }
   }
 }
}


//
function display_chart(labels, values, title_number, total) {
 chart_section.innerHTML = '';

 const canvas = document.createElement('canvas');
 canvas.setAttribute('id', 'chart');
 chart_section.appendChild(canvas);

 var chart = new Chart(canvas, {
   type: 'pie',
   data: {
     labels: labels,
     datasets: [{
       backgroundColor: background_colors,
       data: values
     }]
   },
   options: {
     title: {
       display: true,
       text: scraped_data[0][title_number] + ` (total ${total})`
     }
   }
 });

 chart_section.scrollIntoView();
}
