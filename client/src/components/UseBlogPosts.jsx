import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function UseBlogPosts() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios(`http://localhost:4000/posts`);
      //console.log(results.data.data);
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return {
    navigate,
    posts,
    isError,
    isLoading,
  };
}

export default UseBlogPosts;
