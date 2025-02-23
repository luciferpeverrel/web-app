async function callLambda() {
    const apiUrl = "https://cmffq89c2f.execute-api.ap-south-1.amazonaws.com/prod/lambda";

    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        document.getElementById("response").innerText = `Response: ${data.message}`;
    } catch (error) {
        document.getElementById("response").innerText = `Error: ${error.message}`;
        console.error("Error:", error);
    }
}
