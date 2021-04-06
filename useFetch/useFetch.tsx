import  { useEffect, useRef, useState } from 'react'

interface initState{
    data: any[],
    loading: boolean,
    error: any
}

export const useFetch = (url = '') => {

    const initalState: initState = {
        data: [],
        loading: true,
        error:null
    };

    const isMounted = useRef(true);

    const [state, setState] = useState(initalState);

    useEffect(() => {
        
        return () => {
           isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({
            data: [],
            loading: true,
            error: null
        })
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
           if(isMounted.current){
            setState({
                loading: false,
                error: null,
                data: data
            })
           } else {
               console.log('Componente Desmontado');
               
           }
        })
        .catch(() =>{
            if(isMounted.current){
                setState({
                    data: [],
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
               } else{
                   console.log('DEsmontado');
                   
               }

        });
    }, [url])

    return state;
}
