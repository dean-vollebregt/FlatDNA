async function getSuburbData() {

    console.log("get suburb data invoked");

    try {

        let data = {
            "suburb": "mile end",
            "postcode": "5031"
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

       // console.log(suburbData);


    } catch (error) {
        console.error(error);
    }
}

