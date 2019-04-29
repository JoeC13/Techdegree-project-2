/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

//global variable needed throughout this project.
const div = document.querySelector('.page');
const studentDetails = document.querySelector('.student-details');
const ul = document.querySelector('.student-list');
const lis = document.querySelectorAll('.student-item');
const perPage = 10;

//function that displays only 10 students per page and hides the rest.
const showPage = (list, page) => {
 const startIndex = (page * perPage) - perPage; //first student on each page
 const endIndex = (page * perPage) - 1; // last student on each page
 for (let i = 0; i <list.length; i += 1){
   if (i >= startIndex && i <= endIndex) {
     list[i].style.display = '';
   } else {
     list[i].style.display = 'none';
   }
 }
};
showPage(lis, 1);


const appendPageLinks = (list) => {
  const pageDiv = document.createElement('div'); //creates div container
    pageDiv.className = 'pagination'; //gives div the class
    div.appendChild(pageDiv);
  const pageUl = document.createElement('ul'); //creates unordered list
    pageDiv.appendChild(pageUl); //attaches the ul to the div
  const pageList = document.createElement('li'); //creates list element
// for loop that adds 'a' tags to list
    for(let i = 0; i < list.length / perPage; i += 1){
      const aLink = document.createElement('a');
      pageUl.appendChild(pageList); //attaches list element to the ul
      pageList.appendChild(aLink); //attaches the a tag to the list element
      aLink.href = '#';
      aLink.textContent = i + 1;
      }

      const aTag = document.querySelectorAll('a'); //variable that selects all 'a' tags
      aTag[0].className = 'active'; // adds class_name of 'active' to first page link.

//addEventListener that runs the show_page function when clicked and adds/removes class 'active'
    pageUl.addEventListener('click', () => {

      for (let i = 0; i < aTag.length; i +=1){
        aTag[i].className = '';
      }
      event.target.className = 'active';
      let pageNum = event.target.textContent;
      showPage(list, parseInt(pageNum));
    });
  };
  appendPageLinks(lis); //runs the appends_page_links function.
