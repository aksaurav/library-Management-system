import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL for your Django API endpoint
    const apiUrl = "http://localhost:8000/api/endpoint/";

    // Make an HTTP GET request using the fetch API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data ? (
            <div>
              <h1>Data from the API:</h1>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MyComponent;
