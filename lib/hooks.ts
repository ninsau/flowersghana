import { useEffect, useState } from "react";
import { DataStore, Predicates } from "aws-amplify";

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

export const useDataWithAddons = (model: any, count: number) => {
  const [data, setData] = useState<typeof model[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(
        model,
        (item: any) => item.category("eq", "add-on"),
        {
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

export const useDataWithFilter = (model: any, count: number) => {
  const [data, setData] = useState<typeof model[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(
        model,
        (item: any) =>
          item.or((item: any) =>
            item
              .category("contains", "roses")
              .tags("contains", "cheap")
              .category("contains", "popular")
          ),
        {
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
