import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export interface NotFoundProps {
    
}
 
const NotFound: React.FunctionComponent<NotFoundProps> = () => {
    const router = useRouter();
    useEffect( () => {
        setTimeout( () => {
            router.push('/');
        }, 3000)
    }, []);
    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
                <h2>We coudn't get that, bro</h2>
                <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;