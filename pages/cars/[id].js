import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Car = ({ car }) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    {car.colo} {car.id}
                </title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>{id}</h1>
                <img src={car.image} width="300px" />
            </main>
        </div>
    );
};

export default Car;

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    };
}

//generate all html content before sending to user
//good for blog sites where content isn't always changing

// export async function getStaticProps({ params }) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { car: data },
//     };
// }

// export async function getStaticPaths() {
//     const req = await fetch("http://localhost:3000/cars.json");
//     const data = await req.json();

//     const paths = data.map((car) => {
//         return { params: { id: car } };
//     });

//     return {
//         paths,
//         fallback: false,
//     };
// }
