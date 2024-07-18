document.getElementById("test").addEventListener("click", ()=> sendData("asd"))


async function sendData(data) {
    const response = await fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
}

// Example usage
const data = { key: 'value' };
sendData(data)
    .then(result => {
        console.log('Processed data:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
