export interface DetailsProps {
    ninja: any
}

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        paths: data.map( (ninja: any) => {
            return {
                params: {
                    id: ninja.id.toString()
                }
            }
        }),
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {
            ninja: data
        }
    }
}
 
const Details: React.FunctionComponent<DetailsProps> = ({ ninja }) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
     );
}
 
export default Details;