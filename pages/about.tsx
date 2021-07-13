import Head from "next/head";

export interface Props {
    
}
 
const About: React.FunctionComponent<Props> = () => {
    return (
        <>
        <Head>
            <title>Ninja list | About</title>
        </Head>
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quasi itaque quas amet sed! Veritatis esse necessitatibus porro nostrum. Labore magnam ab facilis odit fugit minima, in porro quae ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quasi itaque quas amet sed! Veritatis esse necessitatibus porro nostrum. Labore magnam ab facilis odit fugit minima, in porro quae ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quasi itaque quas amet sed! Veritatis esse necessitatibus porro nostrum. Labore magnam ab facilis odit fugit minima, in porro quae ex.</p>
        </div>
        </>
    );
}
 
export default About;