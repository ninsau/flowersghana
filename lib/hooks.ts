import { useEffect, useState } from "react";
import { DataStore, Predicates, SortDirection } from "aws-amplify";

export const useData = (model: any) => {
  const [data, setData] = useState<typeof model[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(model);
      setData(getData);
    }
    const subscription = DataStore.observe(model).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);

  return data;
};

export const useDataWithLimit = (model: any, count: number) => {
  const [data, setData] = useState<typeof model[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(
        model,
        Predicates.ALL,
        {
          sort: (s) => s.deliveryDate(SortDirection.DESCENDING),
          page: 0,
          limit: count,
        }
      );
      setData(getData);
    }
    const subscription = DataStore.observe(model).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);

  return data;
};

export const useDataWithEmail = (model: any, email: string) => {
  const [data, setData] = useState<typeof model[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(
        model,
        (item: any) => item.email("eq", email)
      );
      setData(getData);
    }
    const subscription = DataStore.observe(model).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);

  return data;
};


export const useDataWithFilter = (model: any) => {
  const [data, setData] = useState<typeof model[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(model,
        Predicates.ALL,
        {
          sort: (s) => s.title(SortDirection.ASCENDING)
        });
      setData(getData);
    }
    const subscription = DataStore.observe(model).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);

  return data;
};