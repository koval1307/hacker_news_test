import {BASE_URL} from '@env';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getPosts = async (page: number, type: string) => {
  const {data} = await axios.get(`${BASE_URL}${type}stories.json`);
  const posts = await Promise.all(
    data
      .slice(page * 10, (page + 1) * 10)
      .map((id: number) =>
        axios.get(`${BASE_URL}item/${id}.json?print=pretty`),
      ),
  );
  return posts.map(post => post.data);
};

export const usePosts = (page: number, type: string) => {
  return useQuery({
    queryKey: ['posts', page, type],
    queryFn: async () => getPosts(page, type),
  });
};
