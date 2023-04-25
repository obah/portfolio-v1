"use client";

import { useState } from "react";

function useSubmit() {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url: string, data: FormData) => {
    //get responses here...if 200 true, if 400 failed
    setLoading(true);
    /**
    try{
        Await response
        response.ok ? 
        setResponse({
        type: 'success',
        message: `Thank you, ${data.name}, your submission has being received. We will get back to you shortly`
        }) : ({
        throw new Error('Something went wrong, please try again')
        })
         
    } catch (error){
        setResponse({
            type: 'error',
            message: 'Something went wrong, please try again'
        })
    } finally {
        setLoading(false)
    }
  }; */

    return { isLoading, response, submit };
  };
}

export default useSubmit;
