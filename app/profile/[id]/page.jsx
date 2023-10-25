"use client";

const { default: Profile } = require("@components/Profile");
const { useSearchParams } = require("next/navigation");
const { useState, useEffect } = require("react");

function UserProfile({ params }) {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params?.id]);

  return (
    <Profile
      name={`${userName}'s`}
      desc={`These are all the posts from ${userName}!`}
      data={userPosts}
    />
  );
}

export default UserProfile;
