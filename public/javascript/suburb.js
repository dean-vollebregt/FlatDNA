async function getSuburbData() {

    console.log("get suburb data invoked");

    try {

        let data = {
            suburb: 'mile end',
            postcode: 5031
        };

        let url = 'https://tcf90dktqi.execute-api.ap-southeast-2.amazonaws.com/prod/suburb';

        let suburbData = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        console.log(suburbData);

    } catch (error) {
        console.error(error);
    }
}

