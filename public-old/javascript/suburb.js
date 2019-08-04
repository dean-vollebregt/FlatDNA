async function getSuburbData() {

    let suburb = document.getElementById('suburb').value;
    let postcode = document.getElementById('postcode').value;

    try {
        let data = {
            "suburb": suburb,
            "postcode": postcode
        };

        const url = 'https://tcf90dktqi.execute-api.ap-southeast-2.amazonaws.com/prod/suburb';

        let rawSuburbData = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            },
            mode: "cors"
        });

        let suburbData = await rawSuburbData.json();

        renderSuburbData(suburbData);

    } catch (error) {
        console.error(error);
    }
}

