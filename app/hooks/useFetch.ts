import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState([""]);
    const [error, setError] = React.useState(null);

    const request = React.useCallback(async (url: string) => {
        let response;
        let json;
        try { 
            setError(null);
            response = await fetch(url);
            json = await response.json();
            if (response.ok === false) throw new Error(json.message);
        } 
        catch(err: any){
            json = null;
            setError(err.message);
        }
        finally{
            setData(json);
            return{response, json};
        }
    }, [])

    return {
        data,
        error,
        request
      }
}

export default useFetch;