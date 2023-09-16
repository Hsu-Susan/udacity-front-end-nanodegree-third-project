const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = ",us&appid=f9a272c9342361f9514ca76b0f49e947&units=imperial";
let input, zip, url = '';

// setup today date
let d = new Date();
let today = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', verifyZip);

// Validate the zipcode user entered
function verifyZip(zip) {
    zip = document.getElementById('zip').value;
    if (zip.length != 5) {
        alert('Please enter a 5 digit zip code(US only)');
        return;
    }
    else if (isNaN(parseInt(zip))){
        alert('Please enter your numeric zip code only')
        return;
    }
    getInput(zip);
}

/* Function called by event listener */
function getInput(zip) {
    input = document.getElementById('feelings').value;
    getData(baseURL, zip, apiKey)
    .then(function(data) {
        // add data to POST request
        postData('/addEntry', {temp: data.main.temp, date: today, input: input});
        updateUILayout();
    });
}

/* Function to GET Web API Data*/
const getData = async(baseURL, zip, key) => {
    const response = await fetch(baseURL + zip + key);
    try {
        const data = await response.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

/* Function to POST data */
const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }

}

/* GET project data and update UI */
const updateUILayout = async() => {
    console.log("ui updated!!! ");
    const request = await fetch('/all');
    console.log(request);
    try {
        const allData = await request.json();
        // make journal entry visible
        document.getElementById('journal-entry').classList.remove('hidden');

        // update values for journal entry
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp + " &deg;F";
        document.getElementById('content').innerHTML = allData.input;
    }
    catch(error) {
        console.log("Error: ", error);
    }
}