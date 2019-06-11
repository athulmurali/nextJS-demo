import Link from 'next/link';
import Layout from "../components/MyLayout";

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function Index() {
    return (

        <Layout>
            <h1>My Blog</h1>

            <ul>
                <PostLink id ="Hello Next.js" title="Hello Next.js"/>
                <PostLink id= "Learn Next.js is awesome" title="Learn Next.js is awesome"/>
                <PostLink id ="Deploy apps with Zeit" title="Deploy apps with Zeit"/>
            </ul>
        </Layout>
    );
}