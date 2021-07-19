import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export interface NinjasProps {
    ninjas: any
}
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}
const Ninjas: React.FunctionComponent<NinjasProps> = ({ ninjas }) => {
    return ( 
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map( (ninja: any) => (
                <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>     
            ))}
        </div>
     );
}
 
export default Ninjas;