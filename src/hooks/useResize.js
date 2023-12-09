import { useEffect,  useState } from "react"

const useResize = () =>{
    const [cols,setCols] = useState(0);
    
    useEffect(()=>{

        const handleResize = () =>{
            let windowWidth = window.innerWidth;
            
            if(windowWidth < 400){
                console.log('<400')
                setCols(2)
            }else if(windowWidth < 600){
                console.log('<600')
                setCols(3)

            }else if(windowWidth < 820){
                console.log('<820')
                setCols(4)

            }else if(windowWidth < 1024){
            
                console.log('<1020')
                setCols(5)
            }else{
            
                console.log('>1020')
                setCols(6)
            }
        }

        window.addEventListener('resize',handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])
    
    return cols;
}

export default useResize