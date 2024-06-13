import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const useBlogPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4000/posts");
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
    navigate: navigate,
    posts: posts,
    isError: isError,
    isLoading: isLoading,
  };
};

export default useBlogPosts;
