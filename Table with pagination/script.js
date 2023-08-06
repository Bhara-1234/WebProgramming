// Sample data for the table
const tableData = [
    { col1: 'Ram', col2: '22' },
    { col1: 'Abhi', col2: '23' },
    { col1: 'Sairam', col2: '24' },
    { col1: 'Rakesh', col2: '25' },
    { col1: 'Anil', col2: '26' },
    { col1: 'Jagan', col2: '27' },
    // Add more data as needed
];

// Function to display table data based on pagination
function displayTableData(page, data) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const rowData = data[i];
        const row = document.createElement('tr');
        row.innerHTML = `<td>${rowData.col1}</td><td>${rowData.col2}</td>`;
        tableBody.appendChild(row);
    }
}

// Function to create pagination links
function createPaginationLinks() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement('span');
        link.textContent = i;
        link.classList.add('pagination-link');
        if (i === currentPage) {
            link.classList.add('active');
        }
        link.addEventListener('click', function() {
            handlePaginationClick(i); // Use the handlePaginationClick function instead
        });
        paginationDiv.appendChild(link);
    }
}

// Function to apply search filter to the table data
function applySearchFilter() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredData = tableData.filter(row => {
        return row.col1.toLowerCase().includes(searchTerm) ||
               row.col2.toLowerCase().includes(searchTerm);
    });

    // Update the table and pagination with the filtered data
    totalPages = Math.ceil(filteredData.length / itemsPerPage);
    displayTableData(1, filteredData);
    createPaginationLinks();
}

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchInput.addEventListener('input', applySearchFilter);
searchButton.addEventListener('click', applySearchFilter);

function handlePaginationClick(page) {
    currentPage = page;
    displayTableData(currentPage, tableData);
    createPaginationLinks();
}


// Initial display
// Variables to track pagination
const itemsPerPage = 2;
let currentPage = 1;
let totalPages;
totalPages = Math.ceil(tableData.length / itemsPerPage);
createPaginationLinks();
displayTableData(currentPage, tableData);
