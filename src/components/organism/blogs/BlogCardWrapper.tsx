"use client";

import { useSearchTerm } from "@/components/hooks/useSearchTerm";
import { BlogCard } from "@/components/molecules/blog";
import { BlogPosts } from "@/components/types";
import { searchPosts } from "@/lib/client";
import { useEffect, useState } from "react";

export function BlogCardWrapper({ posts }: BlogPosts) {
  const { searchTerm } = useSearchTerm();
  const [searchedPosts, setSearchedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const results = await searchPosts(searchTerm);
        setSearchedPosts(results);
      } else {
        setSearchedPosts([]);
      }
    };

    fetchData();
  }, [searchTerm]);
  return (
    <section className=" w-full">
      <div className="grid grid-cols-1 @[468px]/blog:grid-cols-2 @[864px]/blog:grid-cols-3 gap-x-8 gap-y-6">
        {searchedPosts.length > 0
          ? searchedPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))
          : posts.map((post, index) => <BlogCard key={index} post={post} />)}
      </div>
    </section>
  );
}
