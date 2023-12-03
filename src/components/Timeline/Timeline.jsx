import PopularSongs from "../PopularSongs/PopularSongs";
import Post from "../Posts/Post";
import styles from "./Timeline.module.css";

import Logo from '../../images/logo_violearn-removebg-preview 1.svg';

import { useEffect, useState } from "react";


const Timeline = () => {

    const [posts, setPosts] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/post")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setPosts(data)

    })

    }, [])

    


    return (
        <div className={styles.timeline}>
            <div className={styles.timeline_left}>
                <div className={styles.timeline_posts}>
                    {/* <Post nome={"Roger Guedes"}/>
                    <Post nome={"Stephen Curry"}/>
                    <Post nome={"Yuri Alberto"}/> */}
                    {posts && posts.slice().reverse().map( (post) => (
                        <Post key={post.id} nome={post.userName} text={post.text} image={post.postPath}/>
                    ))}

                </div>
            </div>
            <div className={styles.timeline_right}>
                <PopularSongs/>
            </div>
        </div>
    )
}

export default Timeline;