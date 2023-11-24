import {BASE_URL} from '@env';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchComments = async (ids: number[]) => {
  const posts = await Promise.all(
    ids.map((id: number) =>
      axios.get(`${BASE_URL}item/${id}.json?print=pretty`),
    ),
  );
  return posts.map(post => post.data);
};

export const useComments = (ids: number[]) => {
  return useQuery({
    queryKey: ['posts', ids],
    queryFn: async () => fetchComments(ids),
  });
};
