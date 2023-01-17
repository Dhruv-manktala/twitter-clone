import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { postPropType, postType } from "../../lib/types/type";

const SingleTweet = () => {
  const router = useRouter();
  const { id } = router.query;

  const [tweet, setTweet] = useState<postType>();

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setTweet(res);
      });
  }, []);

  return (
    <>
      <h1>{tweet && tweet.postData}</h1>
    </>
  );
};

export default SingleTweet;
